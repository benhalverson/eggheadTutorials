angular
    .module('app', [])
    .run(function($rootScope){
        $rootScope.posts = [4, 5, 6];
    })
    .controller('FirstCtrl', function($scope){
        //this scope is the child of the rootscope
        var posts = [1, 2, 3];
        $scope.posts = posts;
    })
    .controller('SecondCtrl', function($scope){
      //This scope is the child of first controllers scope
        var posts = [4, 5, 6];
        $scope.posts = posts;
    });
//if you comment out lines 8,9 and 13,14 the rootscope will display
//in both controllers.
//https://egghead.io/lessons/javascript-function-scope-and-scope