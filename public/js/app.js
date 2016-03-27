// test comment
var app = angular.module('OnlineShop', ['ui.router', "store", "myApp", 'ngCart']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: 'partials/home.html'
        })
        .state('shop', {
            url: "/shop",
            templateUrl: 'partials/shop.html'
        })
        .state('customercare', {
            url: "/customercare",
            templateUrl: 'partials/customercare.html'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: 'partials/blog.html'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: 'partials/aboutus.html'
        })
        .state('store', {
            url: "/store",
            templateUrl: 'partials/store.html'
        })
        .state('product', {
            url: "/product",
            templateUrl: 'partials/product.html', 
        })
        .state('product/: sku', {
            url: "/product/{productSku}",
            templateUrl: 'partials/product.html'
        })
});

app.controller('StoreController', ['$http', function ($http) {
    var store = this;
    store.items = [];
    $http.get('/items').success(function (data) {
        store.items = _.chunk(data, 4);
    });
}]);

app.controller('ProductController', function ($http, $stateParams) {  
    var productCntrl = this; 
    $http.get('/items/' + $stateParams.productSku).success(function (data) {
        productCntrl.item = data;
    });
});

app.controller('TabController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
});