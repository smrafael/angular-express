(function() {
    'use strict';

    angular
        .module('blocks.http')
        .factory('HttpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$q', '$window', '$injector', 'logger'];

    /* @ngInject */
    function HttpInterceptor($q, $window, $injector, logger) {
        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        function request(config) {

          if (config.url.indexOf('/api/') == 0) {
            var accessToken = $window.sessionStorage.getItem('access_token');
            if (accessToken) {
              config.headers['Authorization'] = 'JWT ' + accessToken;
            }
          }
          return config;
        }

        function responseError(error) {

          if (error.status === 401) {
            logger.error('Unauthorized User! Please, log in again.');
            $injector.get('$state').go('login');
				  } else {
            logger.error(error);
          }
          return $q.reject(error);
        }
    }
})();
