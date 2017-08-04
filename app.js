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
    .controller('myFirstCotroller',DIcontroller )
    .filter('loves', lovesFilter).filter('truth', TruthFilter);

    DIcontroller.$inject = ['$scope','$filter', 'lovesFilter'];
    function DIcontroller($scope, $filter, lovesFilter){
        $scope.name = "";
        $scope.totalNameVal = 0;
        $scope.stateOfBeing = 'hungry';
        $scope.increment = 0;
        $scope.upcounter = function(){
            $scope.increment++;
        }
        $scope.$watch('increment', function(newvalue, oldvalue){
            console.log("increment old value", oldvalue);
            console.log("increment new value", newvalue);
        })
        $scope.displayNameVal = function(){
            var nameval = calcNameValFromString($scope.name);
            $scope.totalNameVal = nameval;
        };
        $scope.feedFardim = function(){
            $scope.stateOfBeing = 'fed';
        };
        $scope.showNumberofWatchers = function(){
            console.log("No of watchers : ",$scope.watchersCount);
        }
        $scope.sayLovesMsg =function(){
            var msg = "Fardim likes to eat biscuit";
            msg = lovesFilter(msg);
            return msg;
        };
        $scope.sayMsg =function(){
            var msg = "Fardim likes to eat biscuit";
            return msg;
        };

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

    function TruthFilter(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

    function lovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };

    }
})()