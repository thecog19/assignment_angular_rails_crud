var Board = angular.module("Board", ["ui.router", "restangular"])
.constant("_", window._);

//xcsrf config
Board.config(
  [ "$httpProvider",
  function($httpProvider){
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

//auth stuff
Board.config([
  'AuthProvider',
  function(AuthProvider) {
    AuthProvider.loginPath('/api/v1/user/sign_in.json');
    AuthProvider.loginMethod('POST');
    AuthProvider.resourceName('users');
  }
]);

//restangular config
Board.config([
    'RestangularProvider',
    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          "content-type": "application/json"
      });
    }
]);

//routes
Board.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      
    })
  }
])