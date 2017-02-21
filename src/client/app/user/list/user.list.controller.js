(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['UserService'];

    /* @ngInject */
    function UserListController(UserService) {
      var vm = this;

      activate();

      function activate() {
        UserService.list()
          .then(success);

        function success(response) {
          vm.users = response.data;
        }
      }
    }
})();
