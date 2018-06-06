angular.module("beer-rate.home").controller("HomeController", function(beerService){
    var vm = this;
    var backcolor = 0;
    vm.beers = beerService.getBeers();

    vm.beerOfTheWeek = vm.beers[2];
    vm.propsThisBeer = function(beerIdtoProp){
        var beerToProp = vm.beers.filter(function (beer) {
            return (beer.id == beerIdtoProp);
        })[0];
        beerToProp.rate +=1;
        alert("Voted for: " + beerToProp.name);
    }
});