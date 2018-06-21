var app = angular.module('Home', ['pascalprecht.translate']);

app.config(function ($translateProvider) {

    $translateProvider.translations('en', {
        titleFirst: 'PLACEMENT OF',
        titleSecond: 'PAVLODARENERGO\'S BONDS',
        title: 'ENG',
        text: 'Special trading session for placement of 50,000,000 bonds PDENb2 of "PAVLODARENERGO" JSC will be held on KASE today',
        company: 'For Companies',
        investor: 'For Investors',
        broker: 'For Brokers-Dealers',
        market: 'For Market Data Users',
        shares: 'Shares',
        moneyMarket: 'Money market',
        forex: 'Foreign currencies'

    });

    $translateProvider.translations('ru', {
        titleFirst: 'РАЗМЕЩЕНИЕ ОБЛИГАЦИЙ ',
        titleSecond: 'ПАВЛОДАРЭНЕРГО',
        title: 'RUS',
        text: '19 июня АО "ПАВЛОДАРЭНЕРГО" привлекло на KASE 400,4 млн тенге, разместив облигации PDENb2 с доходностью к погашению 12,50 % годовых',
        company: 'Компаниям',
        investor: 'Инвесторам',
        broker: 'Брокерам-дилерам',
        market: 'Пользователям рыночной информации',
        shares: 'Акции',
        moneyMarket: 'Денежный рынок',
        forex: 'Валюты'
    });

    $translateProvider.translations('kaz', {
        titleFirst: 'ПАВЛОДАРЭНЕРГО ',
        titleSecond: 'ОБЛИГАЦИЯЛАРЫН ОРНАЛАСТЫРУ',
        title: 'KAZ',
        text: '"ПАВЛОДАРЭНЕРГО" АҚ PDENb2 7 жылдық облигацияларын Қазақстан қор биржасында орналастыру арқылы өтеуге кірістілігі жылдық 12,50 % 400,4 млн теңге тартты',
        company: 'Компанияларға',
        investor: 'Инвесторларға',
        broker: 'Брокер-дилерлерге',
        market: 'Нарықтық ақпаратты пайдаланушыларға',
        shares: 'Акциялар',
        moneyMarket: 'Ақша нарығы',
        forex: 'Шетел валюталары'
    });

    $translateProvider.preferredLanguage('en');

});

app.controller('HomeCtrl', function ($scope, $timeout, $translate) {
    var vm = this;
    vm.indexShares = false;
    vm.indexMoney = false;
    vm.indexForex = false;

    $scope.titleFirst = 'titleFirst';
    $scope.titleSecond = 'titleSecond';
    $scope.text = 'text';
    $scope.company = 'company';
    $scope.investor = 'investor';
    $scope.broker = 'broker';
    $scope.market = 'market';
    $scope.shares = 'shares';
    $scope.moneyMarket = 'moneyMarket';
    $scope.forex = 'forex';
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $scope.items = [];

    // simulate that the data is loaded from a remote source
    $timeout(function () {


        $scope.items = [
            {
                imgSrc: './images/eabr_bonds_placement.jpg',
                label: 'label 1',
                titleFirst: $scope.titleFirst,
                titleSecond: $scope.titleSecond,
                text: $scope.text
            },
            {
                imgSrc: './images/tbills_placement_1.jpg',
                label: 'label 2',
                titleFirst: 'GOVERNMENT BONDS',
                titleSecond: 'PLACEMENT',
                text: 'Repeated special trading session for offering of MEUKAM-168 of 3rd issue will be held on KASE on June 18'
            },
            {
                imgSrc: './images/tbills_placement.jpg',
                label: 'label 3',
                titleFirst: 'GOVERNMENT BONDS',
                titleSecond: 'PLACEMENT',
                text: 'on June 11 Ministry of Finance of Kazakhstan raised KZT25.2 bln on KASE placing 6th issue of MEUKAM-156 with yield to maturity of 8.44 % APR'
            },
            {
                imgSrc: './images/annual_press_conference.jpg',
                label: 'label 4',
                titleFirst: 'MONTHLY',
                titleSecond: 'MEDIA BRIEFING',
                text: 'KASE presents stock exchange market performance results in May 2018'

            },
            {
                imgSrc: './images/kase_startup.jpg',
                label: 'label 5',
                titleFirst: 'KASE',
                titleSecond: 'STARTUP',
                text: 'on June 06, 2018 KASE officially launched KASE Startup platform'
            },
            {
                imgSrc: './images/brokers_on_currency_market.jpg',
                label: 'label 6',
                titleFirst: 'BROKERS ACCESS',
                titleSecond: 'TO CURRENCY MARKET',
                text: 'Brokerage companies will be granted the right to participate in trading on foreign currency market at KASE'
            },
            {
                imgSrc: './images/slide27.jpg',
                label: 'label 7',
                titleFirst: 'KASE CHANNEL ',
                titleSecond: 'IN TELEGRAM',
                text: 'KASE added information on dividends to Telegram channel'
            }


        ];

        $translate($scope.titleFirst).then(function successFn(translation) {
            $scope.titleFirst = translation;
            // console.log('Translate: ', translation);
        }, function errorFn(translationId) {
            // console.log('Translate failed: ', translationId );
        });

        $scope.dataLoaded = true;

    }, 0);

    $scope.datas = [];

    $scope.datas= [
        {
            underlineText: $scope.company
        },
        {
            underlineText: $scope.investor
        },
        {
            underlineText: $scope.broker
        },
        {
            underlineText: $scope.market
        }
    ];


    vm.showShares = function () {
        vm.indexShares = true;
    };
    vm.closeShares = function () {
        vm.indexShares = false;
    };
    vm.showMoney = function () {
        vm.indexMoney = true;
    };
    vm.closeMoney = function () {
        vm.indexMoney = false;
    };
    vm.showForex = function () {
        vm.indexForex = true;
    };
    vm.closeForex = function () {
        vm.indexForex = false;
    };

});



