angular
	.module('unoMas.status')
	.config(statusConfig);

function statusConfig($stateProvider) {
	$stateProvider.state({
		name: 'status',
		url: '/status',
		templateUrl: 'js/features/status/status.html',
		controller: 'StatusCtrl',
		controllerAs: 'StatusVM'
	})
}