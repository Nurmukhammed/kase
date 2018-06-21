var app = angular.module('State', [
    'ui.router',
    'slick',
    'pascalprecht.translate'
]);

app.run(['$rootScope',function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        // console.log(toState);
        $rootScope.home = (toState.name == 'home');
        $rootScope.auth = (toState.name == 'auth');
    });
}])

app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: "/",
            templateUrl: "views/home.html",
            controller: "HomeCtrl",
            controllerAs: 'vm'
        })
        .state('auth', {
            url: "/login",
            templateUrl: "views/auth.html",
            controller: "AuthCtrl",
            controllerAs: 'vm'
        })
};
