angular.module("beer-rate.home").directive("news", function(){
    return{
        restrict: "E",
        scope: {},
        controller: "NewsController",
        controllerAs: "vm",
        templateUrl: "/app/home/news/news.html"
    }
});