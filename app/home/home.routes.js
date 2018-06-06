angular.module("beer-rate.home").config(function ($stateProvider){
    
    $stateProvider
    .state({
            name: "beer-rate-home-root",
            url: "",
            controller: "HomeController",
            controllerAs: "vm",
            templateUrl: "app/home/home.html"
    });
});