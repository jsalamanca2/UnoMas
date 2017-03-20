angular
	.module('unoMas.confirmation')
	.config(confirmationConfig);

function confirmationConfig($stateProvider) {
	$stateProvider.state({
		name: 'confirmation',
		url: '/confirmation',
		templateUrl: 'js/features/confirmation/confirmation.html',
		controller: 'ConfirmationCtrl',
		controllerAs: 'ConfirmationVM'
	})
}