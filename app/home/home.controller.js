angular.module("beer-rate.home").controller("HomeController", function(beerService){
    var vm = this;
    vm.beers = beerService.getBeers();

    vm.beerOfTheWeek = vm.beers[2];
    vm.propsThisBeer = function(beerToProp){
        alert("lubisz to suko! " + beerToProp);
    }
});