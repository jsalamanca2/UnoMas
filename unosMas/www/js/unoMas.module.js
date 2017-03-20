angular
  .module('unoMas', [
    'ionic',

    'unoMas.home',
    'unoMas.login',
    'unoMas.signUp',
    'unoMas.selection',
    'unoMas.confirmation',
    'unoMas.location'
  ])
  .config(unoMasConfig)
  .run(unoMasRun);

function unoMasConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}

function unoMasRun($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
