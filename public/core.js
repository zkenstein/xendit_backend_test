var xenditApp = angular.module('xenditApp', []);
function mainController($scope, $http) {
	$scope.formData = {};

	$scope.sendIt = function() {
		$http.post('/search', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.result = data;
			})
			.error(function() {
				console.log('Error');
			});
	};
}
