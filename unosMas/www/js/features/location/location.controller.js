angular
	.module('unoMas.location')
	.controller('LocationCtrl', LocationCtrl);

function LocationCtrl($state) {
	var vm = this;

	vm.continue = function(){
		$state.go('selection');
	};


}