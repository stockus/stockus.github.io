//"use strict";

var app = angular.module('app');

app.config(function ($routeProvider) {

    $routeProvider.when("/stock", {
        controller: "StockListController",
        templateUrl: "app/stock/list.html"
    });
	$routeProvider.when("/stock/:id", {
        controller: "StockDetailController",
        templateUrl: "app/stock/detail.html"
    });
    $routeProvider.otherwise({ redirectTo: "/stock" });
});