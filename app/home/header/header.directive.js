angular.module("beer-rate.home").directive("header", function(){
    return{
        restrict: "E",
        scope: {},
        bindToController: true, 
        controller: "HeaderController",
        controllerAs: "vm",
        templateUrl: "/app/home/header/header.html"
    }
});