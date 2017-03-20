angular
	.module('unoMas.signUp')
	.config(signUpConfig);

function signUpConfig($stateProvider) {
	$stateProvider.state({
		name: 'signUp',
		url: '/signUp',
		templateUrl: 'js/features/signUp/signUp.html',
		controller: 'SignUpCtrl',
		controllerAs: 'SignUpVM'
	})
}