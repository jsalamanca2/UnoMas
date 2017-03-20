angular
	.module('unoMas.home')
	.config(homeConfig);

function homeConfig($stateProvider) {
	$stateProvider.state({
		name: 'home',
		url: '/home',
		templateUrl: 'js/features/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'HomeVM'
	})
}