(function() {
  'use strict';

  angular
  .module('app.user')
  .service('UserService', UserService);

  UserService.$inject = ['$http'];

  /* @ngInject */
  function UserService($http, serverAddress) {
    var base_url = '/api/account';
    var service = {
      createUser: createUser,
      login: login,
      list: list
    };

    return service;

    function createUser(newUser) {
      return $http.post(base_url + '/register',
        {name: newUser.name, username: newUser.username, password: newUser.password});
    }

    function login(username, password) {
      return $http.post(base_url + '/login', {username: username, password: password});
    }

    function list() {
      return $http.get(base_url);
    }

  }
})();
