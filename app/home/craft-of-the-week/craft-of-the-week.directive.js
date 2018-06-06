angular.module("beer-rate.home").directive("craftOfTheWeek", function(){
    return{
        restrict: "E",
        scope: {
            beer: "=",
            propsBeer: "&"
        },
        bindToController: true, // valid from 1.5...?
        controller: "CraftOfTheWeekController",
        controllerAs: "vm",
        templateUrl: "/app/home/craft-of-the-week/craft-of-the-week.html"
    }



});


// E - element -> <craft-of-the-week/>
// A - atrbute -> <div craft-of-the-week> </div>
// C - klasa - unikac