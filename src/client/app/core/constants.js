/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('serverAddress', 'http://localhost:8001/api');
})();
