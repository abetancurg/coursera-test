(function(){
'use strict'

angular.module('DIApp', [])

.controller('DIController', DIController);

function DIController ($scope, 
                       $filter,
                       $injector) {
    $scope.name = "Andrés";

    $scope.upper = function (){
        var upCase = $filter ('uppercase');
        $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
}

function AnnonateMe(name, job, blah){
    return "Blah!";
}

console.log(AnnonateMe.toString());

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
    




