angular
	.module('unoMas.selection')
	.config(selectionConfig);

function selectionConfig($stateProvider) {
	$stateProvider.state({
		name: 'selection',
		url: '/selection',
		templateUrl: 'js/features/selection/selection.html',
		controller: 'SelectionCtrl',
		controllerAs: 'SelectionVM'
	})
}