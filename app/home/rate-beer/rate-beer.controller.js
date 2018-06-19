angular.module("beer-rate.home").controller("RateBeerController", function($stateParams){
    var vm = this;

    vm.initBeerList = function(){
        vm.beersToShow = $stateParams.beers;//vm.beers;
    }

    vm.propsTheBeer = function(id){
        alert(id);        
    }
});