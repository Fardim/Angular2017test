//name calculator......................................................
// var student = {
//     name: "",
//     type: "Student"
// }

// document.addEventListener('DOMContentLoaded', contentLoaded);

// function contentLoaded(event) {
//     document.getElementById('name').addEventListener('keyup', keyUp);
// }

// function keyUp(event) {
//     calculateNumericValues();
// }

// function calculateNumericValues() {
//     student.name = document.getElementById('name').value;
//     var totalNumvalue = 0;
//     for (var i = 0; i < student.name.length; i++) {
//         totalNumvalue += student.name.charCodeAt(i);
//     }
//     var output = "the numeric value of the person's name : " + totalNumvalue;

//     document.getElementById('output').innerText = output;
// }
//........................................................................


(function(){
    'use strict';

    angular.module('myFirstApp',[])

    .controller('myFirstCotroller',DIcontroller );
    DIcontroller.$inject = ['$scope','$filter'];
    function DIcontroller($scope, $filter){
        $scope.name = "";
        $scope.totalNameVal = 0;
        $scope.stateOfBeing = 'hungry';
        $scope.displayNameVal = function(){
            var nameval = calcNameValFromString($scope.name);
            $scope.totalNameVal = nameval;
        };
        $scope.feedFardim = function(){
            $scope.stateOfBeing = 'fed';
        }

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        function calcNameValFromString(string){
            var totalStringVal = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringVal += string.charCodeAt(i);
            }
            return totalStringVal;
        }
    }
})()