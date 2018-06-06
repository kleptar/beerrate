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

	vm.openNav = function(){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        
	}
	
	vm.closeNav = function(){
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";

    }
});