Board.controller('pinShowCtrl',
  ['$scope', 'pinService', "$stateParams",

    function($scope, pinService, $stateParams) {
      pinService.find($stateParams.id).then(function(pin) {
        $scope.pin = pin;
      });

    }

]);
