/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var User = require('../api/user/user.model');

User.find({}).remove(function () {
  User.create(
    {
      provider: 'local',
      name: 'Digital Sismo Design',
      email: 'digital@sismodesign.com',
      password: 'sismo'
    }
    ,
    {
      provider: 'local',
      role: 'admin',
      name: 'Vamara',
      email: 'vamara@sismodesign.com',
      password: 'vamara'
    },
    {
    provider: 'local',
      role: 'admin',
      name: 'Kevin',
      email: 'kevin@sismodesign.com',
      password: 'kevin'
   }, function () {
      console.log('finished populating users');
    }
  );
});

//Publishing color value
var Color = require('../api/color/color.model');
Color.find({}).remove(function () {
  Color.create(
    {
      name: 'Vert clair',
      value: 'Vert clair'
    },
    {
      name: 'Vert plat',
      value: 'Vert plat'
    },
    {
      name: 'Blanc',
      value: 'Blanc'
    },
    {
      name: 'Multicouleurs pâle',
      value: 'Multicouleurs pâle'
    },
    {
      name: 'Poudrées',
      value: 'Poudrées'
    },
    {
      name: 'Nude',
      value: 'Nude'
    },
    {
      name: 'Mates',
      value: 'Mates'
    },
    {
      name: 'Rouge écarlate passion',
      value: 'Rouge écarlate passion'
    },
    {
      name: 'Rouge noir',
      value: 'Rouge noir'
    },
    {
      name: 'Cuivré',
      value: 'Cuivré'
    },
    {
      name: 'Poupre',
      value: 'Poupre'
    },
    {
      name: 'Orange intense',
      value: 'Orange intense'
    },
    {
      name: 'Rouge franc',
      value: 'Rouge franc'
    },
    {
      name: 'Pastel & aquarelle',
      value: 'Pastel & aquarelle'
    },
    {
      name: 'Couleurs vives & brillantes',
      value: 'Couleurs vives & brillantes'
    },
    {
      name: 'Ivoire & blanc',
      value: 'Ivoire & blanc'
    },
    {
      name: 'Aquarelles pales multicolor',
      value: 'Aquarelles pales multicolor'
    },
    {
      name: 'Vert pale',
      value: 'Vert pale'
    },
    {
      name: 'Vert pale & aquarelle',
      value: 'Vert pale & aquarelle'
    },
    {
      name: 'Bleu aigue marine',
      value: 'Bleu aigue marine'
    },
    {
      name: 'Bleu marine',
      value: 'Bleu marine'
    },
    {
      name: 'Blanc satiné & ivoire',
      value: 'Blanc satiné & ivoire'
    },
    {
      name: 'Nude Tones & Mat',
      value: 'Nude Tones & Mat'
    },
    {
      name: 'Rouge cramoisi',
      value: 'Rouge cramoisi'
    },
    {
      name: 'Rose vif aquarelle',
      value: 'Rose vif aquarelle'
    },
    {
      name: 'Rose laque & lumière vive',
      value: 'Rose laque & lumière vive'
    },
    {
      name: 'Crémeux & ivoire',
      value: 'Crémeux & ivoire'
    },
    {
      name: 'Or & laque rouge',
      value: 'Or & laque rouge'
    },
    {
      name: 'Noir & beige crémeux',
      value: 'Noir & beige crémeux'
    },
    {
      name: 'Rose vif',
      value: 'Rose vif'
    }
    ,
    {
      name: 'Rose vif & violine',
      value: 'Rose vif & violine'
    }
    ,
    {
      name: 'Rose bonbon',
      value: 'Rose bonbon'
    }
    ,
    {
      name: 'Peau de pêche & abricot',
      value: 'Peau de pêche & abricot'
    }
    ,
    {
      name: 'Rose pink à rose abricot',
      value: 'Rose pink à rose abricot'
    }
    ,
    {
      name: 'Rose pink de parme à rose',
      value: 'Rose pink de parme à rose'
    }
    ,
    {
      name: 'Rose pâle',
      value: 'Rose pâle'
    },
    {
      name: 'Rose intense',
      value: 'Rose intense'
    }
    , function () {
      console.log('finished populating colors');
    }
  );
});
//Publishing place value
var Place = require('../api/place/place.model');
Place.find({}).remove(function () {
  Place.create(
    {
      name: 'Interieur',
      value: 'Interieur'
    },
    {
      name: 'Exterieur',
      value: 'Exterieur'
    },
    {
      name: 'Reflets',
      value: 'Reflets'
    },
    {
      name: 'Brillant',
      value: 'Brillant'
    },
    {
      name: 'Embruns & sable',
      value: 'Embruns & sable'
    },
    {
      name: 'Sous bois',
      value: 'Sous bois'
    },
    {
      name: 'Ville lumière jour',
      value: 'Ville lumière jour'
    }
    ,
    {
      name: 'Pariries , Matin d\'été',
      value: 'Pariries , matin d\'été'
    }
    ,
    {
      name: 'Soir intérieur',
      value: 'Soir intérieur'
    }
    ,
    {
      name: 'Intérieur nuit',
      value: 'Intérieur nuit'
    },
    {
      name: 'Extérieur jour , plage , mer',
      value: 'Extérieur jour , plage , mer'
    },
    {
      name: 'Extérieur jour pleine lumière',
      value: 'Extérieur jour pleine lumière'
    },
    {
      name: 'Extérieur démi-Jour',
      value: 'Extérieur démi-Jour'
    },
    {
      name: 'Intérieur jour',
      value: 'Intérieur jour'
    },
    {
      name: 'Extérieur jour',
      value: 'Extérieur jour'
    },
    {
      name: 'Intérieur démi jour',
      value: 'Intérieur démi jour'
    },
    {
      name: 'Extérieur lumière matin',
      value: 'Extérieur lumière matin'
    },
    {
      name: 'Extérieur jour',
      value: 'Extérieur jour'
    },
    {
      name: 'Extérieur démi jour',
      value: 'Extérieur démi jour'
    },
    {
      name: 'Extérieur plein jour',
      value: 'Extérieur plein jour'
    }
    ,
    {
      name: 'Intérieur nuit',
      value: 'Intérieur nuit'
    },
    {
      name: 'Extérieur nuit',
      value: 'Extérieur nuit'
    },
    function () {
      console.log('finished populating place');
    }
  )
});
//Publishing taste value
var Taste = require('../api/taste/taste.model');
Taste.find({}).remove(function () {
  Taste.create(
    {
      name: 'Cru & salé',
      value: 'Cru & salé'
    },
    {
      name: 'Cru & tige & sève',
      value: 'Cru & tige & sève'

    }
    ,
    {
      name: 'Sacré & granité poires',
      value: 'Sacré & granité poires'

    }
    ,
    {
      name: 'Sucré & amande & sec',
      value: 'Sucré & amande & sec'

    }
    ,
    {
      name: 'Sucré & pulpe de fruit cuite',
      value: 'Sucré & pulpe de fruit cuite'

    }
    ,
    {
      name: 'Sucré & crème de vanille',
      value: 'Sucré & crème de vanille'

    }
    ,
    {
      name: 'Trace d\'amertume apéritive',
      value: 'Trace d\'amertume apéritive'

    }
    ,
    {
      name: 'Réglisse & sucré',
      value: 'Réglisse & sucré'

    }
    ,
    {
      name: 'Sucré & praliné & gianduja',
      value: 'Sucré & praliné & gianduja'

    }
    ,
    {
      name: 'Salé',
      value: 'Salé'

    }
    ,
    {
      name: 'Aciduité',
      value: 'Aciduité'

    }
    ,
    {
      name: 'Sucré & confit',
      value: 'Sucré & confit'

    }
    ,
    {
      name: 'Fade & tiède',
      value: 'Fade & tiède'

    }
    ,
    {
      name: 'Aqueux & cru',
      value: 'Aqueux & cru'

    }
    ,
    {
      name: 'Douce amertume & désalterant',
      value: 'Douce amertume & désalterant'

    }
    ,
    {
      name: 'Amertume bitter & feuille froissée',
      value: 'Amertume bitter & feuille froissée'

    }
    ,
    {
      name: 'Amertume long drink',
      value: 'Amertume Long drink'

    },
    {
      name: 'Acidulé & sucré',
      value: 'Acidulé & sucré'

    }
    ,
    {
      name: 'Sucré & un peu Gras',
      value: 'Sucré & un peu Gras'

    }
    ,
    {
      name: 'Sucré & fruit rouges & noirs',
      value: 'Sucré & fruit rouges & noirs'

    }
    ,
    {
      name: 'Sucré & fruit aqueux melon pasteque',
      value: 'Sucré & fruit aqueux melon pasteque'

    }
    ,
    {
      name: 'Cru & épicé',
      value: 'Cru & épicé'

    }
    ,
    {
      name: 'Sucré & gras & vanillé & crémeux',
      value: 'Sucré & gras & vanillé & crémeux'

    },
    {
      name: 'Epicé & chaud',
      value: 'Epicé & chaud'

    },
    {
      name: 'Sucré & amertume chaude',
      value: 'Sucré & amertume chaude'

    },
    {
      name: 'Framboise & sucre',
      value: 'Framboise & sucre'

    },
    {
      name: 'Sucré & confiture fruit rouge',
      value: 'Sucré & confiture fruit rouge'

    },
    {
      name: 'Sucré & caramel',
      value: 'Sucré & caramel'

    },
    {
      name: 'Sucré & poudre de sucre',
      value: 'Sucré & poudre de sucre'

    }
    ,
    {
      name: 'Sucré & épicé & salivant & doux',
      value: 'Sucré & épicé & salivant & doux'

    },
    {
      name: 'Sucré & goutte de jus de litchi',
      value: 'Sucré & goutte de jus de litchi'

    },
    {
      name: 'Sucré & acidulé granny smith',
      value: 'Sucré & acidulé granny smith'

    },
    {
      name: 'Sucré & framboise & sirop de litchi',
      value: 'Sucré & framboise & sirop de litchi'

    }
    , function () {
      console.log('finished populating tastes');
    }
  )
});
//Publishing Olfactory value
var Olfactory = require('../api/olfactory/olfactory.model');
Olfactory.find({}).remove(function () {
  Olfactory.create(
    {
      name: 'Floral',
      value: 'Floral'
    },
    {
      name: 'Chypre',
      value: 'Chypre'

    },
    {
      name: 'Fresh',
      value: 'Fresh'

    },
    {
      name: 'Woody',
      value: 'Woody'

    },
    {
      name: 'Floriental',
      value: 'Floriental'

    },
    {
      name: 'Oriental',
      value: 'Oriental'

    },
    {
      name: 'Woody',
      value: 'Woody'

    },
    {
      name: 'Aromatic',
      value: 'Aromatic'

    },
    {
      name: 'Fresh',
      value: 'Fresh'

    },
    {
      name: 'Vert',
      value: 'Vert'

    },
    {
      name: 'Fruite',
      value: 'Fruite'

    }
    , {
      name: 'Gourmand',
      value: 'Gourmand'

    }, {
      name: 'Fruity',
      value: 'Fruity'

    },
    {
      name: 'Spicy',
      value: 'Spicy'

    },
    {
      name: 'Aquatic',
      value: 'Aquatic'

    },
    {
      name: 'Fougere',
      value: 'Fougere'

    }

    , function () {
      console.log('finished populating olfactory');
    }
  )
});
//Publishing Wake value
var Wake = require('../api/wake/wake.model');
Wake.find({}).remove(function () {
  Wake.create(
    {
      name: 'Léger',
      value: 'Léger'
    },
    {
      name: 'Affirmé',
      value: 'Affirmé'

    }
    , function () {
      console.log('finished populating wake');
    }
  )
});
//Publishing sound
var Sound = require('../api/sound/sound.model');
Sound.find({}).remove(function () {
  Sound.create(
    {
      name: 'Cristalin',
      value: 'Cristalin'
    },
    {
      name: 'Voix & rires jeunes',
      value: 'Voix & rires jeunes'
    },
    {
      name: 'Musique céleste',
      value: 'Musique céleste'
    },
    {
      name: 'Clarinette lente',
      value: 'Clarinette lente'
    }
    , {
      name: 'Solo de piano calme',
      value: 'Solo de piano calme'
    },
    {
      name: 'Disco',
      value: 'Disco'
    },
    {
      name: 'Voix de fille , voilée',
      value: 'Voix de Fille , voilée'
    },
    {
      name: 'Bruit de vagues douces',
      value: 'Bruit de vagues douces'
    },
    {
      name: 'Paririe',
      value: 'Paririe'
    },
    {
      name: 'Accordéon joyeux',
      value: 'Accordéon joyeux'
    },
    {
      name: 'Zen',
      value: 'Zen'
    },
    {
      name: 'Bruit de nature',
      value: 'Bruit de nature'
    },
    {
      name: 'Cristallin',
      value: 'Cristallin'
    },
    {
      name: 'Gouttes d\'eau sur vegétal',
      value: 'Gouttes d\'eau sur vegétal'
    }
    , function () {
      console.log('finished populating sound');
    }
  );
});
//Publishing level
var Level = require('../api/level/level.model');
Level.find({}).remove(function () {
  Level.create(
    {
      name: 'Pur',
      value: 'Pur'
    },
    {
      name: 'Frénétique',
      value: 'Frénétique'
    },
    {
      name: 'Combinaison',
      value: 'Combinaison'
    },
    {
      name: 'Calme',
      value: 'Calme'
    }
    , function () {
      console.log('finished populating level');
    }
  );
});
//Publishing densitivity
var Densitivity = require('../api/densitivity/densitivity.model');
Densitivity.find({}).remove(function () {
  Densitivity.create(
    {
      name: 'Nervuré',
      value: 'Nervure'
    },
    {
      name: 'Lisse',
      value: 'Lisse'
    },
    {
      name: 'Soft',
      value: 'Soft'
    }
    , function () {
      console.log('finished populating densitivity');
    }
  );
});
//Publishing sensitivity
var Sensitivity = require('../api/sensitivity/sensitivity.model');
Sensitivity.find({}).remove(function () {
  Sensitivity.create(
    {
      name: 'Mou',
      value: 'Mou'
    },
    {
      name: 'Dur',
      value: 'Dur'
    },
    {
      name: 'Souple',
      value: 'Souple'
    }
    , function () {
      console.log('finished populating sensitivity');
    }
  );
});
//Publishing light
var Light = require('../api/light/light.model');
Light.find({}).remove(function () {
  Light.create(
    {
      name: 'Jour',
      value: 'Jour'
    },
    {
      name: 'Nuit',
      value: 'Nuit'
    },
    {
      name: '(Demi)jour',
      value: '(Demi)jour'
    }
    , function () {
      console.log('finished populating light');
    }
  );
});
//Publishing gender
var Gender = require('../api/gender/gender.model');
Gender.find({}).remove(function () {
  Gender.create(
    {
      name: 'Homme',
      value: 'Homme'
    },
    {
      name: 'Femme',
      value: 'Femme'
    }
    , function () {
      console.log('finished populating gender');
    }
  );
});

//Publishing Perfume
var Parfum = require('../api/perfume/perfume.model');
Parfum.find({}).remove(function () {
  Parfum.create(
    {
      name: 'ANAIS ANAIS',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['blanc & vert pale'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['salé'],
      sounds: ['cristallin'],
      levels: [],
      sensitivitys: ['nervuré'],
      densitivitys: ['mou'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'DELICE',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['multicouleurs pales'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['nervuré'],
      densitivitys: ['dur'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'AMOR AMOR',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rouge écarlate passion'],
      places: [],
      lights: [],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'FUEL FOR LIFE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Femme',
      colors: ['Peau Bronzée', 'Cuivré'],
      places: ['Interieur'],
      lights: ['Nuit'],
      tastes: ['Amer'],
      sounds: ['Solo de Piano Calme'],
      levels: [],
      sensitivitys: ['Souple'],
      densitivitys: ['Nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'LOVERDOSE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['pourpre', 'orange intense'],
      places: ['interieur'],
      lights: ['nuit'],
      tastes: ['sucré'],
      sounds: ['disco'],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'UNTITLED',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['vert pâle'],
      places: ['exterieur'],
      lights: ['demi jour'],
      tastes: ['amer'],
      sounds: ['bruits de nature'],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'ACQUA DI GIOIA',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Femme',
      colors: ['bleu aigue marine'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['acidulé et sucré'],
      sounds: ['gouttes d\'eau sur vegétal'],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'CODE DONA',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['blanc satiné', 'ivoire'],
      places: ['extérieur'],
      lights: ['demi jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['lisse'],
      densitivitys: ['mou'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'SI',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rouge cramoisi'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [''],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'PARISIENNE',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rose vif aquarelle'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'PARIS',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rose laque et lumière vive'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['épicé'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'MANIFESTO',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['crémeux et ivoire'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'OPIUM',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['or, et laque rouge'],
      places: ['intérieur'],
      lights: ['nuit'],
      tastes: ['épicé'],
      sounds: [],
      levels: [],
      sensitivitys: ['lisse'],
      densitivitys: ['souple'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'BLACK OPIUM',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Femme',
      colors: ['noir & beige crémeux'],
      places: ['extrieur'],
      lights: ['nuit'],
      tastes: ['sucré et amer'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'TRESOR',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['peau de pêche', 'abricot'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'MIRACLE',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Femme',
      colors: ['rose pink à rose abricot'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré', 'épicé'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'LA VIE EST BELLE',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Femme',
      colors: ['de parme à rose'],
      places: ['interieur'],
      lights: ['nuit'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ROMANCE',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rose pale,'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'FLOWER BOMB',
      brand: 'Viktor & Rolf',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rose vif'],
      places: ['interieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'BONBON',
      brand: 'Viktor & Rolf',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['rose bonbon'],
      places: ['interieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'BEACHWALK',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['pastel & aquarelle'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['salé'],
      sounds: ['bruit de vagues douces'],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'FUNFAIR',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['couleurs vives & brillantes'],
      places: ['exterieur'],
      lights: ['démi jour'],
      tastes: ['sucré'],
      sounds: ['accordéon joyeux'],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'POLO',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'Homme',
      colors: ['brun cognac'],
      places: ['interieur'],
      lights: ['jour tamisé'],
      tastes: ['alcool fort whisky', 'cognac'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'POLO BLACK',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['vert "eucalyptus"'],
      places: ['extérieur'],
      lights: ['nuit'],
      tastes: ['salé', 'aromates', 'épicé'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'POLO RED',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['rouge pur'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'POLO BLUE',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['bleu ciel saturé'],
      places: ['exterieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: ['jazz trompette'],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: []
    }, {
      name: 'DRAKAR NOIR',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['vert tres foncé', 'noir'],
      places: ['intérieur'],
      lights: ['nuit'],
      tastes: ['aigre doux', 'épicé sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'SPICE BOMB',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['acier clair brillant'],
      places: ['interieur'],
      lights: ['jour'],
      tastes: ['épices blanches croquantes'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'FUEL FOR LIFE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: [],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ONLY THE BRAVE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['chamois/beige'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ACQUA DI GIO',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['turquoise', 'vert pale'],
      places: ['interieur'],
      lights: ['nuit'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'CODE UOMO',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['beige mat'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['désaltérant'],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'L\' HOMME',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['chanvre', 'beige', 'ficelle'],
      places: ['extérieur'],
      lights: ['nuit'],
      tastes: ['sucré'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'LA NUIT DE L\' HOMME',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['anthracite à noir'],
      places: ['extérieur'],
      lights: ['jour'],
      tastes: ['pétale'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ANAIS ANAIS',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['chair de fleur'],
      places: [],
      lights: ['jour'],
      tastes: ['croquant'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'DELICE',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['juteux'],
      places: [],
      lights: [],
      tastes: ['onctueux'],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'AMOR AMOR',
      brand: 'Cacharel',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['suave'],
      places: [],
      lights: [],
      tastes: ['jean'],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },

    {
      name: 'FUEL FOR LIFE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['toile'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'LOVERDOSE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['oncteux'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'UNTITLED',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['végétal'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ACQUA DI GIOIA',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['pulpe de fruit'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'CODE DONA',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['crémeux'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'SI',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['satiné'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'PARISIENNE',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['coton'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'PARIS',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['cristal'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'MANIFESTO',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['lourd'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'OPIUM',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['soie'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'BLACK OPIUM',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['cuir noir'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'TRESOR',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['velour'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'MIRACLE',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['mousseline'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'LA VIE EST BELLE',
      brand: 'Lancôme',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['soie'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'ROMANCE',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['cristallin'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'FLOWER BOMB',
      brand: 'Viktor & Rolf',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['velouté'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'BONBON',
      brand: 'Viktor & Rolf',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['souple'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'BEACHWALK',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['aérien'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'FUNFAIR',
      brand: 'Maison Martin Margiela',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['cotonneux'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'POLO',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['cuir'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'POLO BLACK',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'femme',
      colors: ['dur'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'POLO RED',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['bois flotté'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'POLO BLUE',
      brand: 'Ralph Lauren',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['cristal de roche'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'DRAKAR NOIR',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['gomme mate'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'SPICE BOMB',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['électrique'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'FUEL FOR LIFE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['nervure de bois clair'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    },
    {
      name: 'ONLY THE BRAVE',
      brand: 'Diesel',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['bois mat'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['lisse'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'ACQUA DI GIO',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-1.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['eau de mer'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'CODE UOMO',
      brand: 'Giorgio Armani',
      thumb: 'assets/images/parfum-2.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['beaume de bois'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['souple'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'L\'HOMME',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-3.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['copeaux de bois'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }, {
      name: 'LA NUIT DE L\' HOMME',
      brand: 'Yves Saint Laurent',
      thumb: 'assets/images/parfum-4.jpg',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['lainage mat'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: [],
      url_detail : 'http://www.sismodesign.com'
    }
    , function () {
      console.log('finished populating perfume');
    }
  );
});


/*var Auragramme = require('../api/auragram/auragram.model');
Auragramme.find({}).remove(function () {
  Auragramme.create(
    {
      name: 'AAA AAA AAA',
      brand: 'Ralph Lauren',
      thumb: '',
      data: '',
      gender: 'homme',
      colors: ['bois flotté'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: []
    },
    {
      name: 'BBB BBB BBB',
      brand: 'Yves Saint Laurent',
      thumb: '',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['lainage mat'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: []
    },
    function () {
      console.log('finished populating auragram');
    }
  )
});*/
