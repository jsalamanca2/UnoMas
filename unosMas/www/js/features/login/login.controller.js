angular
	.module('unoMas.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($state) {
	var vm = this;

	vm.continue = function(){
		$state.go('selection');
	}
}