angular.module("beer-rate.home").controller("NewsController", function(newsService){
    var vm = this;
    vm.news = newsService.getNews();
});