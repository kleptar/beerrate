angular.module("beer-rate.home").controller("LatestNewsController", function(newsService){
    var vm = this;
    vm.news = newsService.getNews();
});