angular
	.module('unoMas.selection')
	.controller('SelectionCtrl', SelectionCtrl);

function SelectionCtrl($state) {
	var vm = this;

	vm.continue = function(){
		$state.go('confirmation');
	};
	
}