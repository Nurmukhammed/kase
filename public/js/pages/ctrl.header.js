var app = angular.module('Header', ['pascalprecht.translate']);

app.config(function ($translateProvider) {

    $translateProvider.translations('en', {
        greet: 'Hello',
        title: 'Kaz',
        message: 'language'
    });

    $translateProvider.translations('ru', {
        greet: 'Привет',
        title: 'Ru',
        message: 'Язык'
    });

    $translateProvider.preferredLanguage('en');

});

app.controller('HeaderCtrl', function ($scope, $translate) {

    var vm = this;
    $scope.greet = 'greet';
    $scope.title = 'title';
    $scope.message = 'message';
    $scope.titleFirst = 'TitleFirst';
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

});
