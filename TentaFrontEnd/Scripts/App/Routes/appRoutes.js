(function () {
    'use strict';

    angular.module('app')
    .config(
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'Views/Partials/listOfGenres.html',
                    controller: 'ListOfGenresCtrl'
                }).
              when('/edit/:genreID', {
                  templateUrl: 'Views/Partials/editGenre.html',
                  controller: 'EditGenreCtrl'
              }).
            otherwise({
                redirectTo: '/'
            });
        });
})();