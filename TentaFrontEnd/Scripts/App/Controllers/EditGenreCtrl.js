(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditGenreCtrl',

            function ($scope, $routeParams, apiService,$location) {

                apiService.getGenre($routeParams.genreID).success(function (genre) {
                    $scope.genre = genre;
                });

                $scope.updateGenre = function(genre) {
                    apiService.updateGenre(genre).success(function() {
                        $location.path('/');
                    });
                }
            });
})();
