(function() {
  'use strict';

  var core = angular.module('app.core');

  // 'config' as service
  var config = {
    appErrorPrefix: '[Angular-Express Error] ',
    appTitle: 'Angular-Express'
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
  configure.$inject = ['$logProvider', 'routerHelperProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

  // HttpInterceptor
  core.config(httpInterceptorConfig);
  httpInterceptorConfig.$inject = ['$httpProvider'];
  function httpInterceptorConfig($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
  }

})();
