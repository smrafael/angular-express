(function() {
    'use strict';

    angular
        .module('app.template')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$state'];

    /* @ngInject */
    function TemplateController($state) {
        var vm = this;

        activate();

        function activate() {
          vm.template = {};
          vm.menuVisible = true;
          if ($state.current.name == 'main') {
            $state.go('.users')
          }
        }
    }
})();
