(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserListController', UserListController);

    UserListController.$inject = [];

    /* @ngInject */
    function UserListController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
