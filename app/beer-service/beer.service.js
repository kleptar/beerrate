angular.module("beer-rate.home").service("beerService", function(){
    
    return {
        getBeers: getBeers
    }

    function getBeers(){
        return [
            { name: "Tyskie", brewery: "kompania piwowarska", rate: 2},
            { name: "Zuber", brewery: "kompania piwowarska", rate: 3},
            { name: "Volt", brewery: "kompania piwowarska", rate: 5},
            { name: "Lech", brewery: "kompania piwowarska", rate: 7},
            { name: "Kasztelan", brewery: "Carlsberg", rate: 6},
            { name: "Tatra", brewery: "Carlsberg", rate: 1},
            { name: "Harnas", brewery: "kompania piwowarska", rate: 8}
        ];
    }

});