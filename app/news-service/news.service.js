angular.module("beer-rate.home").service("newsService", function(){
    
    return {
        getNews: getNews
    }

    function getNews(){
        return [
            { title: "News 1", content: "News 1 content is news number 1", dateAdded: '2018-06-01'},
            { title: "News 2", content: "News 2 content is news number 2", dateAdded: '2018-06-02'},
            { title: "News 3", content: "News 3 content is news number 3", dateAdded: '2018-06-03'},
            { title: "News 4", content: "News 4 content is news number 4", dateAdded: '2018-06-04'},
            { title: "News 5", content: "News 5 content is news number 5", dateAdded: '2018-06-05'},
            { title: "News 6", content: "News 6 content is news number 6", dateAdded: '2018-06-06'}
        ];
    }

});