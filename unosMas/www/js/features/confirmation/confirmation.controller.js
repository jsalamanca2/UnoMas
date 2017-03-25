angular
	.module('unoMas.confirmation')
	.controller('ConfirmationCtrl', ConfirmationCtrl);

function ConfirmationCtrl(api, $q, $state) {
	var vm = this;

    vm.continue = function(){
        $state.go('status');
    };

	vm.drivers = {};
    vm.isListView = false;

    var promises = [
        api.user(23)

    ];

    $q.all(promises).then(function(users){
        vm.drivers = users;
    });

}