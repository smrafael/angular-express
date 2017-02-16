(function() {
  'use strict';

  var core = angular.module('app.core');

  // 'config' as service
  var config = {
    appErrorPrefix: '[sanmina Error] ',
    appTitle: 'Sanmina'
  };
  core.value('config', config);

  // Toastr config
  core.config(toastrConfig);
  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  // Providers
  core.config(configure);
  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
