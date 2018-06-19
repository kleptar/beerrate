angular.module("beer-rate.home").controller("CraftOfTheWeekController", function(){
    var vm = this;

    vm.propsTheBeerForToday = function(){
        vm.propsBeer()(vm.beer.id);        
    }

    vm.beerShortDescription = function(){
        return vm.beer.description.substring(0, 50) + "...";
    }
});