angular.module("beer-rate.home").directive("rateBeer", function(){
    return{
        restrict: "E",
        scope: { },
        bindToController: true, // valid from 1.5...?
        controller: "RateBeerController",
        controllerAs: "vm",
        templateUrl: "/app/home/rate-beer/rate-beer.html"
    }
});