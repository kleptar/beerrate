angular.module("beer-rate.home").config(function ($stateProvider){
    
    $stateProvider
    .state( "beer-rate-home-root", {
            name: "beer-rate-home-root",
            url: "",
            controller: "HomeController",
            controllerAs: "vm",
            templateUrl: "app/home/home.html"
    })

   $stateProvider
   .state( "beer-rate-home-root.news", {
           name: "beer-rate-home-root.news",
           url: "\news",
           controller: "NewsController",
           controllerAs: "vm",
           templateUrl: "app/home/news/news.html"
   })

   $stateProvider
   .state( "beer-rate-home-root.browse", {
           name: "beer-rate-home-root.browse",
           url: "\browse",
           params: {
               beers: {}
           },
           controller: "ListBeerDetailsController",
           controllerAs: "vm",
           template: "<list-beers></list-beers>"//"<list-beers beers='vm.beers' ></list-beers>" //app/home/list-beers/list-beers.html"
   })

   $stateProvider
   .state( "beer-rate-home-root.rate", {
           name: "beer-rate-home-root.rate",
           url: "\rate",
           params: {
                beers: {},
                propBeer: {}
           },
           controller: "RateBeerController",
           controllerAs: "vm",
           template: "<rate-beer></rate-beer>"
   })
    
    
});