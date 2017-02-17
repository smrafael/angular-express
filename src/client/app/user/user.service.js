(function() {
  'use strict';

  angular
  .module('app.user')
  .service('UserService', UserService);

  UserService.$inject = ['$http'];

  /* @ngInject */
  function UserService($http, serverAddress) {
    var service = {
      createUser: createUser,
      login: login
    };

    return service;

    function createUser(newUser) {
      return $http.post('/api/account/register',
        {username: newUser.username, password: newUser.password});
    }

    function login(username, password) {
      return $http.post('/api/account/login', {username: username, password: password});
    }

  }
})();
