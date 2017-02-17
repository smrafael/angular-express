(function() {
    'use strict';

    angular
        .module('app.template')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                abstract: true,
                state: 'main',
                config: {
                    url: '/',
                    templateUrl: 'app/template/template.html',
                    controller: 'TemplateController',
                    controllerAs: 'vm',
                }
            }
        ];
    }
})();
