angular.module("beer-rate.home").controller("ListBeerController", function(){
    var vm = this;
    vm.beersToShow = [];
    var activeBeer = resetActiveBeer();
    var idPrefix = "beer-in-row-";
    var activeClass = "active";

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
        if (activeBeer==beerToMark) 
        {
            activeBeer = resetActiveBeer()
            return;
        }
        document.getElementById(idPrefix + beerToMark).classList.add(activeClass);
        selectedBeer.showDetails = true;
        activeBeer = beerToMark;
    }

    function deactivateListElements(){
        angular.forEach(vm.beersToShow,function(value, key) {
            value.showDetails = false;
            if ( document.getElementById(idPrefix + value.id).classList.contains(activeClass) ) {
                document.getElementById(idPrefix + value.id).classList.remove(activeClass);
            }
        }); 
    }

    function resetActiveBeer(){
        return -1;
    }
});