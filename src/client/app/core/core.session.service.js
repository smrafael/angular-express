(function() {
    'use strict';

    angular
        .module('app.core')
        .service('SessionService', SessionService);

    SessionService.$inject = ['$window'];

    /* @ngInject */
    function SessionService($window) {
        var service = {
          storeAccessToken: storeAccessToken
        }
        return service;

        function storeAccessToken(tokenJson) {
          $window.sessionStorage.setItem('access_token', tokenJson.access_token);
        };

        function removeAccessToken() {
          $window.sessionStorage.removeItem('access_token');
        }
    }
})();
