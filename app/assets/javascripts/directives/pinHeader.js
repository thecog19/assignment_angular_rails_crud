
Board.directive('pinHeader', function() {

  return {
    templateUrl: 'templates/pins/pinHeader.html',
    restrict: 'E',
    scope: {
      pin: '='
    }
  };

});
