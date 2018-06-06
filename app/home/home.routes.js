angular.module("beer-rate.home").config(function ($stateProvider){
    
    $stateProvider
    .state({
            name: "beer-rate-home-root",
            url: "",
            controller: "HomeController",
            controllerAs: "hcvm",
            templateUrl: "app/home/home.html"
    });
});