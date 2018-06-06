angular.module("beer-rate.home").controller("ListBeerController", function(){
    var vm = this;
    vm.beersToShow = [];
    var activeBeer = -1;
    vm.initBeerList = function(){
        vm.beersToShow = vm.beers;
        angular.forEach(vm.beersToShow,function(value, key) {
            value.showDetails = false;
        }); 
    }

    vm.toggleBeerDetails = function(beerToMark){
        vm.initBeerList();
        
        var selectedBeer = vm.beersToShow.filter(function (beer) {
            return (beer.id == beerToMark);
        })[0];
        deactivateListElements();
        if (activeBeer==beerToMark) return;
        document.getElementById("beer-in-row-" + beerToMark).classList.add('active');
        selectedBeer.showDetails = true;
        activeBeer = beerToMark;
    }

    function deactivateListElements(){
        angular.forEach(vm.beersToShow,function(value, key) {
            value.showDetails = false;
            if ( document.getElementById("beer-in-row-" + value.id).classList.contains('active') ) {
                document.getElementById("beer-in-row-" + value.id).classList.remove('active');
            }
        }); 
    }
});