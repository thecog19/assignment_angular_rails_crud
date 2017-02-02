
Board.directive('pin', function() {

  return {
    templateUrl: 'templates/pins/pin.html',
    restrict: 'E',
    scope: {
      pin: '='
    }
  };

});
