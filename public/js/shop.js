var storeApp = angular.module('store', []);



var jeweleries = [
  {
      name: 'Valerie',
      price: 14.99,
      description: 'This is our new brand',
      canPurchase: true,
      images: [
          {
              full: 'images/download.jpg',
          }]
  },
  {
      name: 'Lala',
      price: 15.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
       images: [
          {
              full: 'images/download.jpg',
          }]
  },
     {
      name: 'Nora',
      price: 16.99,
      description: '',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
  },
     {
      name: 'Susanne',
      price: 17.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
  },
{
      name: 'Julia',
      price: 18.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
},
    {
      name: 'Tina',
      price: 20.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      name: 'Nina',
      price: 21.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      name: 'Lara',
      price: 22.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    }

    ];

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