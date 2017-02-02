
Board.controller('pinsCtrl',
  ['$scope', 'pinService',

    function($scope, pinService) {

      pinService.all().then(function(pins) {
        $scope.pins = pins;
      });

    }

]);
