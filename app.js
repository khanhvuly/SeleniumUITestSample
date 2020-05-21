var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, serviceName, $rootScope) {
  $scope.name = 'World';

  console.info(serviceName.foo);
  
  serviceName.subscribeMe();
  
  $rootScope.$on('app.clickEvent', function(a, b) {
    $scope.name = 'click happened';
    console.info(a,b);
    $scope.$apply();
  });


});

app.service('serviceName', function($window, $rootScope) {
  
  function subsFunc() {
    $window.addEventListener('click', function(e) {
      console.info('click in serviceName');
      $rootScope.$broadcast('app.clickEvent', e);
    })
  }

  return {
    "subscribeMe": subsFunc,
    'foo' : 42
  }
});