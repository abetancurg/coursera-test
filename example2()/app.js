(function(){
'use strict'

angular.module('DIApp', [])

.controller('DIController', DIController);

//This way allows us to minificate the total code
//by the javascript-minifier.com web.
DIController.$inject = ['$scope','$filter'];

function DIController ($scope, 
                       $filter) {
    $scope.name = "Andrés";

    $scope.upper = function (){
        var upCase = $filter ('uppercase');
        $scope.name = upCase($scope.name);
    };
}

})();

//controlador -->
    // $scope.name="";
    // $scope.totalValue=0;

    // $scope.displayNumeric = fuction(){
    //     var totalNameValue=
    //     calculatNumericForString($scope.name);
    //     $scope.totalValue = totalNameValue;
    // };

    // fuction calculatNumericForString(string){
    //     var totalStringValue = 0;
    //     for (var i=0; i< string.length; i++){
    //         totalStringValue += string.charCodeAt(i);
    //     }
    // }
    




