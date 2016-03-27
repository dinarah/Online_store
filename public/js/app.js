// products
var jeweleries = [
  {   sku: "VAL",
      name: 'Valerie',
      price: 14.99,
      description: 'This is our new brand.I am a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
      canPurchase: true,
      images: [
          {
              full: 'images/download.jpg',
          }]
  },
  {   sku: "LAL",
      name: 'Lala',
      price: 15.99,
      description: 'This is what we can offer to you.I am a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
      canPurchase: true,
       images: [
          {
              full: 'images/download.jpg',
          }]
  },
     {
      sku: "NOR",   
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
      sku: "SUS",   
      name: 'Susanne',
      price: 17.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
  },
{     sku: "JUL",
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
      sku: "TIN",  
      name: 'Tina',
      price: 19.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      sku: "NIN",  
      name: 'Nina',
      price: 20.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      sku: "LAR",  
      name: 'Lara',
      price: 21.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
   

];

function getProductBySku(sku)
{
    for (var i = 0; i < jeweleries.length; i++) {
        if (jeweleries[i].sku == sku) {
            return jeweleries[i];
        }
    }
}

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
    // Without server
    this.items = _.chunk(jeweleries, 4);
    
    // With server
    /*var store = this;
    $http.get('/items').success(function (data) {
        store.items = _.chunk(data, 4);
    });*/
}]);

app.controller('ProductController', function ($http, $stateParams) {
    // Without server
    this.item = getProductBySku($stateParams.productSku);
    
    // With server
    /*var productCntrl = this;
    $http.get('/items/' + $stateParams.productSku).success(function (data) {
        productCntrl.item = data;
    });*/
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