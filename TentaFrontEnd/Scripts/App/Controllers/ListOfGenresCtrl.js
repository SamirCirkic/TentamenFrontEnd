(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListOfGenresCtrl', function ($scope, apiService) {
            
            var getAllGenres = function () {
                apiService.getAllGenres().success(function (data) {
                    $scope.genres = data.value;
                });
            }

            getAllGenres();

            $scope.deleteGenre = function(id) {
                apiService.deleteGenre(id).success(function (data) {
                    console.log(data);
                    getAllGenres();

                });
            }

            $scope.createNewGenre = function(genre) {
                apiService.createNewGenre(genre).success(function (data) {
                    getAllGenres();
                });
            }
        });
})();
