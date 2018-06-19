angular.module("beer-rate.home").controller("RateBeerController", function($stateParams){
    var vm = this;

    vm.initBeerList = function(){
        vm.beersToShow = $stateParams.beers;//vm.beers;
    }

    vm.propsTheBeer = function(beerIdtoProp){
        var beerToProp = vm.beersToShow.filter(function (beer) {
            return (beer.id == beerIdtoProp);
        })[0];
        beerToProp.rate +=1;
        alert("Voted for: " + beerToProp.name);
    }

});