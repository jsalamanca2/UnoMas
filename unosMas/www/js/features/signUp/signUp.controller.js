angular
	.module('unoMas.signUp')
	.controller('SignUpCtrl', SignUpCtrl);

function SignUpCtrl($state,$scope) {
	var vm = this;
 
    $scope.submit = function(username) {
 
        alert("Thanks " + username);
 
    }


}