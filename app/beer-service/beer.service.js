angular.module("beer-rate.home").service("beerService", function(){
    
    return {
        getBeers: getBeers
    }

    function getBeers(){
        return [
            { name: "Tyskie", brewery: "piwowarnia 1", rate: 2},
            { name: "Zuber", brewery: "piwowarnia 1", rate: 3},
            { name: "Volt", brewery: "piwowarnia 1", rate: 5},
            { name: "Lech", brewery: "rudy browar", rate: 7},
            { name: "Kasztelan", brewery: "rozklapiocha brew co", rate: 6},
            { name: "Tatra", brewery: "tys browar", rate: 1},
            { name: "Harnas", brewery: "tys browar", rate: 8}
        ];
    }

});