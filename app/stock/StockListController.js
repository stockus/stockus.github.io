//"use strict";

app.controller('StockListController', function($scope, $http) {
	//var idList = ["gb_msft", "gb_aapl", "gb_goog", "gb_bidu", "gb_sina", "gb_fb"];
	var idList = ["MSFT", "AAPL", "AMZN", "IBM", "GOOG", "INTC"];
	var startTime = new Date(new Date().setDate(new Date().getDate()-10));
	var startDate = startTime.getFullYear() + "-" + (startTime.getMonth() + 1) + "-" + startTime.getDate();
	var url = "https://www.quandl.com/api/v1/datasets/WIKI/";
	var query = ".json?auth_token=EPRnixDWoq6Mnodjz8ip&trim_start="

	$scope.stockList = [];

	for (var i in idList) {
		$http.get(url+idList[i]+query+startDate).
			success(function(data, status, headers, config) {
				$scope.stockList.push(data);
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
	};

});