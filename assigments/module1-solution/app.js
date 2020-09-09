(function(){

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.input = "";
    $scope.buttom = function(){
        var split = $scope.input.split(",");
        $scope.input = split;
        var filtered = $scope.input.filter(function(element){
            return element != "";
        });
        console.log(filtered);
        var largo = filtered.length;
        console.log(largo);
        if (filtered == "") {$scope.message_bellow = "Please enter data first"}
        else if (largo <= 3) {$scope.message_bellow = "Enjoy!"}
        else $scope.message_bellow = "Too much!" ;
        if ($scope.message_bellow == 'Please enter data first') {
            $scope.color = "red"
        } else {$scope.color = "green"};
       
    };
    $scope.warning = "*** do NOT consider and empty item, i.e., (, ,)";

    
}
})();