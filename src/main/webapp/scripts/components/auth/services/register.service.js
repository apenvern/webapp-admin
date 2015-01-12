'use strict';

angular.module('webappadminApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


