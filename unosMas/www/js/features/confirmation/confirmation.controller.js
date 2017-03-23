angular
	.module('unoMas.confirmation')
	.controller('ConfirmationCtrl', ConfirmationCtrl);

function ConfirmationCtrl(api, $q) {
	var vm = this;

	vm.drivers = {};
    vm.isListView = false;

    var promises = [
        api.user(23),
        api.user(3),
        api.user(3223),
        api.user(2323),
        api.user(4423)

    ];

    $q.all(promises).then(function(users){
        vm.drivers = users;
    });

}