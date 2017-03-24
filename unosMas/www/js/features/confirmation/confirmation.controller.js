angular
	.module('unoMas.confirmation')
	.controller('ConfirmationCtrl', ConfirmationCtrl);

function ConfirmationCtrl(api, $q) {
	var vm = this;

	vm.drivers = {};
    vm.isListView = false;

    var promises = [
        api.user(23)

    ];

    $q.all(promises).then(function(users){
        vm.drivers = users;
    });

}