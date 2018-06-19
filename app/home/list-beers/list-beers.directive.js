angular.module("beer-rate.home").directive("listBeers", function(){
    return{
        restrict: "E",
        scope: {
            beers: "=",
        },
        bindToController: true, // valid from 1.5...?
        controller: "ListBeerController",
        controllerAs: "vm",
        templateUrl: "/app/home/list-beers/list-beers.html"
    }
});