angular
	.module('unoMas.location')
	.config(locationConfig);

function locationConfig($stateProvider) {
	$stateProvider.state({
		name: 'location',
		url: '/location',
		templateUrl: 'js/features/location/location.html',
		controller: 'LocationCtrl',
		controllerAs: 'LocationVM'
	})
}