angular.module("beer-rate.home").directive("top3", function(){
    return{
        restrict: "E",
        scope: {
            beers: "="
        },
        bindToController: true, 
        controller: "Top3Controller",
        controllerAs: "vm",
        templateUrl: "/app/home/top-3/top-3.html"
    }
});