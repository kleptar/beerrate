angular.module("beer-rate.home").directive("latestNews", function(){
    return{
        restrict: "E",
        scope: {},
        bindToController: true, // valid from 1.5...?
        controller: "LatestNewsController",
        controllerAs: "vm",
        templateUrl: "/app/home/latest-news/latest-news.html"
    }
});