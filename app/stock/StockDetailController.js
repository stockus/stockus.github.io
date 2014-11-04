//"use strict";

app.controller('StockDetailController', function($scope, $http, $routeParams) {
	var startTime = new Date(new Date().setDate(new Date().getDate()-20));
	var startDate = startTime.getFullYear() + "-" + (startTime.getMonth() + 1) + "-" + startTime.getDate();
	var url = "https://www.quandl.com/api/v1/datasets/WIKI/";
	var query = ".json?auth_token=EPRnixDWoq6Mnodjz8ip&trim_start=";

	$http.get(url+$routeParams.id+query+startDate).
		success(function(data, status, headers, config) {
			$scope.stockData = data;
		}).
		error(function(data, status, headers, config) {
			console.log(data);
		});

});