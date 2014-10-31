(function () {
    "use strict";

    var app = angular.module('app');
    
	app.controller('StockListController', function ($scope, $http) {
		$scope.stockList = [
			{name:'Jani',country:'Norway'},
			{name:'Hege',country:'Sweden'},
			{name:'Kai',country:'Denmark'}];
    });

}());