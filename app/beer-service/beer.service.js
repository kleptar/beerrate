angular.module("beer-rate.home").service("beerService", function(){
    
    return {
        getBeers: getBeers
    }

    function getBeers(){
        return [
            { id: 1, name: "Tyskie", brewery: "piwowarnia 1", rate: 2},
            { id: 2, name: "Zuber", brewery: "piwowarnia 1", rate: 3},
            { id: 3, name: "Volt", brewery: "piwowarnia 1", rate: 5},
            { id: 4, name: "Lech", brewery: "rudy browar", rate: 7},
            { id: 5, name: "Kasztelan", brewery: "rozklapiocha brew co", rate: 6},
            { id: 6, name: "Tatra", brewery: "tys browar", rate: 1},
            { id: 7, name: "Harnas", brewery: "tys browar", rate: 8}
        ];
    }

});