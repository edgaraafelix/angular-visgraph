'use strict';

var app = angular.module('app.visgraph', ['angular.visgraph']);

app.controller('AppCtrl', ['$scope', '$window', 'appService', function($scope, $window, appService) {

  var get = function() {
    appService.get().then(function(promise) {
	  if (angular.isDefined(promise.error) && promise.error === 0) {
	    $scope.graph = {error: promise.error, data: {nodes: promise.nodes, edges: promise.edges}, options: promise.options};	
	  }
	}, function(promise) {
	  console.error('appService.promise.error', promise);
	});	
  };

  $scope.callbackFunction = function(params) {
	$window.alert( angular.toJson(params) );
  };

  get();
  
}]);

app.factory('appService', ['$q', '$http', function($q, $http) {
  return {
    get: function(method, url) {	    
      var deferred = $q.defer();
      $http.get('data.json')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject("Error! @app.appService");
      	});
      return deferred.promise;
    }        
  };
}]);
