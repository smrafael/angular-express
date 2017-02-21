(function() {
    'use strict';

    angular
        .module('app.user')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'registeruser',
                config: {
                    url: '/register-user',
                    templateUrl: 'app/user/create/user_create.html',
                    controller: 'UserCreateController',
                    controllerAs: 'vm',
                    title: 'Register User',
                }
            },
            {
                state: 'main.users',
                config: {
                    url: 'users',
                    templateUrl: 'app/user/list/user_list.html',
                    controller: 'UserListController',
                    controllerAs: 'vm',
                    title: 'Users Listing',
                }
            }
        ];
    }
})();
