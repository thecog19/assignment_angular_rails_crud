
Board.directive('pinForm', function() {

  return {

    templateUrl: 'templates/pins/pinForm.html',
    restrict: 'E',
    scope: {
      pinParams: '=',
      transactionOptions: '=',
      processForm: '&'
    }
  };

});
