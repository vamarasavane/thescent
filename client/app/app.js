'use strict';

angular.module('thescentApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ui.grid',
  'ui.grid.exporter',
  'ui.grid.selection',
  'elasticsearch'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  }).factory('perfumeService',
  ['$q', 'esFactory', '$location', function ($q, elasticsearch, $location) {
    var client = elasticsearch({
      host: $location.host() + ":9200"
    });

    /**
     * Given a term and an offset, load another round of 10 recipes.
     *
     * Returns a promise.
     */
    var search = function (term, offset) {
      var deferred = $q.defer();
      var query = {
        "match": {
          "_all": term
        }
      };

      client.search({
        "index": 'perfumes',
        "type": 'perfume',
        "body": {
          "size": 10,
          "from": (offset || 0) * 10,
          "query": query
        }
      }).then(function (result) {

        var ii = 0, hits_in, hits_out = [];
        hits_in = (result.hits || {}).hits || [];
        for (; ii < hits_in.length; ii++) {
          hits_out.push(hits_in[ii]._source);
        }
        deferred.resolve(hits_out);
      }, deferred.reject);

      return deferred.promise;
    };


    return {
      "search": search
    };
  }]
).factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function (loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });
