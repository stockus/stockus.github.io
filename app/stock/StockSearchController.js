app.controller('StockSearchController', function($scope, $location) {
	$scope.search = function (id) {
		$location.path('/stock/'+id.toUpperCase());
	}
});