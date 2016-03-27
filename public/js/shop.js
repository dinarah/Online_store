var storeApp = angular.module('store', []);

var myApp = angular.module('myApp',['ngCart']);

myApp.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(0);
    ngCart.setShipping(0);

}]);

/*var productApp = angular.module('productApp', []).config(function ($routeProvider) {
    $routeProvider
    .when( '/shop', {
        templateUrl: 'shop.html'
        
    })
    
   .when('/itemSku/:sku/', {
        templateUrl: 'product.html',
        controller: 'StoreController'
    })
    .otherwise({
        redirectTo: '/product'
    });
        
});

productApp.controller('StoreController', function ($scope, $routeParams) {
    this.productSku = ($routeParams.productSku) ? parseInt($routeParams.productSku) : 0;
});*/