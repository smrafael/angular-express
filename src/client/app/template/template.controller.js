(function() {
    'use strict';

    angular
        .module('app.template')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = [];

    /* @ngInject */
    function TemplateController() {
        var vm = this;

        activate();

        function activate() {
          vm.menuVisible = true;
        }
    }
})();
