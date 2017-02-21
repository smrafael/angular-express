(function() {
    'use strict';

    angular
        .module('app.record')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.record',
                config: {
                    url: 'record',
                    templateUrl: 'app/record/record.html',
                    controller: 'RecordController',
                    controllerAs: 'vm',
                    title: 'Record'
                }
            }
        ];
    }
})();
