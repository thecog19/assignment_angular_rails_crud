
var Board = angular.module('Board', ['ui.router', 'restangular', 'Devise'])
                   .constant('_', window._);

// CSRF config
Board.config(
  [ '$httpProvider',
  function($httpProvider){
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

// Devise config
Board.config(
  ['AuthProvider',

  function(AuthProvider) {
    AuthProvider.loginPath('/api/v1/user/sign_in.json');
    AuthProvider.loginMethod('POST');
    AuthProvider.resourceName('users');
  }

]);

// Restangular config
Board.config(
  ['RestangularProvider',

    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          'content-type': 'application/json'
      });
    }

]);

// UI Router config
Board.config(
  ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/pins');

    $stateProvider.state('pins', {
      url: '',
      abstract: true

    })
    .state('pins.index',{
      url: '/pins',
      views: {
        '@': {
          controller: 'pinsIndexCtrl',
          templateUrl: 'templates/pins/index.html'
        }
      }

    })
    .state('pins.edit', {
      url: '/pins/edit/:id',
      views: {
        '@': {
          controller: 'pinsEditCtrl',
          templateUrl: 'templates/pins/edit.html'
        }
      }
    })
    .state('pins.show',{
      url: '/pins/:id',
      views: {
        '@': {
          controller: 'pinShowCtrl',
          templateUrl: 'templates/pins/show.html'
        }
      }
    });
  }

]);
