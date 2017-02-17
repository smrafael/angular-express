(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['UserService', 'SessionService', 'logger', '$state'];

    /* @ngInject */
    function LoginController(UserService, SessionService, logger, $state) {
        var vm = this;
        vm.login = login;

        activate();

        function activate() {
        }

        function login() {
          UserService.login(vm.username, vm.password)
            .then(success, error);

          function success(response) {
            SessionService.storeAccessToken(response.data);
            $state.go('main');
          }

          function error() {
            logger.error("Error creating user!", error);
          }
        }

    }
})();
