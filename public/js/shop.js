var storeApp = angular.module('store', []);

var myApp = angular.module('myApp', ['ngCart']);

myApp.controller('myCtrl', ['$scope', '$http', 'ngCart', function ($scope, $http, ngCart) {
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
    this.productSku = ($routeParams.productSku) ? parseInt($routeParams.g) : 0;
});*/

var DialogApp = angular.module('exampleDialog', ['ngDialog']);
// Example of how to set default values for all dialogs
DialogApp.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
        }]);
app.controller('MainCtrl', function ($scope, $rootScope, ngDialog, $timeout) {
    $rootScope.jsonData = '{"foo": "bar"}';
    $rootScope.theme = 'ngdialog-theme-default';
    $scope.directivePreCloseCallback = function (value) {
        if (confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
            return true;
        }
        return false;
    };
    $scope.openNotify = function () {
        var dialog = ngDialog.open({
            template: '<p>This item added to your cart!</p>' +
                '<div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="closeThisDialog(1)">OK</button></div>',
            plain: true
        });
        dialog.closePromise.then(function (data) {
            console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
        });
    };

    $rootScope.$on('ngDialog.opened', function (e, $dialog) {
        console.log('ngDialog opened: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.closed', function (e, $dialog) {
        console.log('ngDialog closed: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.closing', function (e, $dialog) {
        console.log('ngDialog closing: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.templateLoading', function (e, template) {
        console.log('ngDialog template is loading: ' + template);
    });
    
    $rootScope.$on('ngDialog.templateLoaded', function (e, template) {
        console.log('ngDialog template loaded: ' + template);
    });
});
