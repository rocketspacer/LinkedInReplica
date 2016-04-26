var appControllers = angular.module('appControllers', []);

appControllers.controller('mainController', ['$scope','$http',
    function ($scope, $http) {
        window.sc = $scope;
        $scope.dummyUrl = "https://google.com";
    
        $http.get('https://api.myjson.com/bins/4g62s').success(function (data) {
            //Read model from json data
            $scope.coverImage = data.coverImg;
            $scope.profileImage = data.profileImg;
            $scope.name = data.name;
            $scope.headline = data.headline;
            $scope.workInfo = data.workInfo;
            $scope.isInfluencer = data.isInfluencer;
            $scope.followers = data.followers;
            $scope.profileUrl = data.profileUrl;
            
            $scope.postsUrl = data.postsUrl;
            $scope.posts = data.posts;
            
            $scope.summary = data.summary;
            
            $scope.experience = data.experience;
            
            $scope.caredCauses = data.caredCauses;
            
            $scope.supportedOrganizations = data.supportedOrganizations;
            
            $scope.skills = data.skills;
            
            $scope.education = data.education;
            
        });
    }]);

// appControllers.controller('otherController', ['$scope', '$routeParams',
//     function($scope, $routeParams) {
//         //RouteParams is what passed 
//         //in last after the url route
//         //e.g: /main/:someId -> [:someId]
//     }]);