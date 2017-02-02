
Board.directive('newPinForm', function() {

  return {

    templateUrl: 'templates/pins/newPinForm.html',
    restrict: 'E',
    scope: {
      pinParams: '=',
      transactionOptions: '=',
      createPin: '&'
    }
  };

});
