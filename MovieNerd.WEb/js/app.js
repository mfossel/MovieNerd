angular.module('app', []);
angular.module('app').controller('indexController', function ($scope, $http) {

    $scope.searchitem = '';

    $scope.search = function () {
        $http.get('http://www.omdbapi.com/?s=' + $scope.searchitem)
               .success(function (data) {
                $scope.movies = data.Search;
               })
               .error(function (error) {
               });
                                          }
   
});

