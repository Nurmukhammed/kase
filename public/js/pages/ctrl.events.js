var app = angular.module('Events', []);

app.controller('EventsCtrl', function($http, $scope, $location) {

    var vm = this;

    vm.events = 'events';
    console.log(vm.events);


});