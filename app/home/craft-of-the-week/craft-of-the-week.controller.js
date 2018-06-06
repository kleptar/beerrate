angular.module("beer-rate.home").controller("CraftOfTheWeekController", function(){
    var vm = this;

    vm.propsTheBeerForToday = function(){
        vm.propsBeer()(vm.beer.name);        
    }
});