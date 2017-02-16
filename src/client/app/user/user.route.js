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
                    templateUrl: 'app/user/user.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'Register User',
                }
            }
        ];
    }
})();
