angular.module("beer-rate.home").controller("HeaderController", function(){
    var vm = this;

    var menuClosed = 0; 

    vm.toggleNav = function(){
        var menuState = getNavigationHeight();
        if (menuState==menuClosed){
            setNavigationHeight(40);
        }
        else
        {
            setNavigationHeight(0);
        }
    }
    
    function getNavigationHeight(){
        return document.getElementById("myTopnav").style.height.replace('px','');
    }

    function setNavigationHeight(height){
        document.getElementById("myTopnav").style.height = height + 'px';
    }
});