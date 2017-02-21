(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize',
      'blocks.logger', 'blocks.router', 'blocks.http',
      'ui.router', 'ngplus'
    ]);
})();
