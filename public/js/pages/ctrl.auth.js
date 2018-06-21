var app = angular.module('Auth', []);

app.controller('AuthCtrl', function($http, $scope, $location) {

    var vm = this;

    $scope.currentPath = $location.path();

    if($scope.currentPath == '/login') {

    }

    console.log($scope.currentPath);

});