(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserCreateController', UserCreateController);

    UserCreateController.$inject = ['UserService', '$state', 'logger'];

    /* @ngInject */
    function UserCreateController(UserService, $state, logger) {
        var vm = this;
        vm.createUser = createUser;

        activate();

        function activate() {
          vm.newUser = {};
        }

        function createUser() {
          UserService.createUser(vm.newUser)
            .then(success, error);

          function success(response) {
            logger.success("User created sucessfully!", vm.newUser.username);
            $state.go('login');
          }

          function error(error) {
            logger.error("Error creating user!", error);
          }

        }
    }
})();
