angular.module("beer-rate.home").controller("HomeController", function(){
    var vm = this;
    vm.zm1 = "zmienna";
    vm.beers = ["Pale ale","IPA","AIPA","APA","Blonde Ale","Witbier","Stout","RIS","Porter"];
    vm.beerOfTheWeek = beer[2];
    vm.propsTheBeer = function(beer){
        alert("lubisz to suko! " + beer);
    }
});