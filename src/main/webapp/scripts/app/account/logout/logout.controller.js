'use strict';

angular.module('webappadminApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
