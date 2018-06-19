angular.module("beer-rate.home").directive("listBeersDetails", function(){
    return{
        restrict: "E",
        scope: {
            beer: "="
        },
        bindToController: true, // valid from 1.5...?
        controller: "ListBeerDetailsController",
        controllerAs: "vm",
        templateUrl: "/app/home/list-beers/list-beers-details/list-beers-details.html"
    }
});