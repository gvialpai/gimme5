angular
  .module('gimmefive')
  .controller('MainController', function($http, $scope){

    $http.jsonp('https://api.instagram.com/v1/tags/yolo/media/recent?count=5&access_token=1382863990.8a67c3b.887cb3693ee8406baff3a6f7b8353cb8&callback=JSON_CALLBACK').success(function(data){
      console.log(data);
      $scope.instagramdata = data;
    })
});

