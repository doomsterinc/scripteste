angular
	.module("myTestFire")
	.controller("testFireCtrl", function ($scope, $firebaseArray){
		var ref = new Firebase("https://be7r8xxj30w.firebaseio-demo.com/");
		
		$scope.messages = $firebaseArray(ref);

		$scope.addMessage = function(e){
			if (e.KeyCode === 13 && $scope.msg) {
				var name = $scope.name || "anonymous";
				$scope.messages.$add({from: name, body: $scope.msg});
				$scope.msg = "";
			};
		}
	});