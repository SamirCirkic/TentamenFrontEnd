(function () {
    'use strict';

    angular
        .module('app')
        .factory('apiService', function ($http) {
            return {
                getAllGenres: function () {
                    return $http.get('odata/Genres');
                },
                getGenre: function (id) {
                    return $http.get('odata/Genres(' + id + ')');
                },
                updateGenre: function (genre) {
                    return $http.put('odata/Genres(' + genre.GenreId + ')', genre);
                },
                createNewGenre: function (genre) {
                    return $http.post('odata/Genres', genre);
                },
                deleteGenre: function (id) {
                    return $http.delete('odata/Genres(' + id + ')');
                }
            }
        });
})();