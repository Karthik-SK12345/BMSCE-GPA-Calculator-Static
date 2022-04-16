angular.module('CalculatorApp', []).controller('CalculatorController', function($scope) {
    $scope.reset = function() {
        $scope.sem1 = "";

    };
    $scope.calCGPA = function() {
        var sem1 = ($scope.sem1);

        var cgpa = ((sem1 - 0.75) * 10);
        if (isNaN(cgpa)) { return "0"; } else
            cgpa = cgpa.toFixed(3);
        return cgpa;
    };
});