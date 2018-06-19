angular.module("beer-rate.home").config(function ($stateProvider){
    
    $stateProvider
    .state({
            name: "beer-rate-home-root",
            url: "",
            controller: "HomeController",
            controllerAs: "vm",
            templateUrl: "app/home/home.html"
    });

    $stateProvider
    .state({
            name: "beer-rate-home-root.news",
            url: "\news",
            controller: "NewsController",
            controllerAs: "vm",
            templateUrl: "app/home/news/news.html"
    });

    $stateProvider
    .state({
            name: "beer-rate-home-root.browse-beers",
            url: "\browse-beers",
            bindToController: true,
            controller: "ListBeerDetailsController",
            controllerAs: "vm",
            templateUrl: "<list-beers beers='vm.beers'></list-beers>" //app/home/list-beers/list-beers.html"
    })

    $stateProvider
    .state({
            name: "beer-rate-home-root.rate-beer",
            url: "\rate-beer",
            templateUrl: "<p>nothing here</p>"
    })
    
    
});