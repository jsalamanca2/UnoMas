angular
    .module('unoMas.component.driver')
    .directive('driver', DriverDirective);

function DriverDirective() {
    return {
        restrict: 'E',
        scope: {
            driverData: '=',
            list: '='
        },
        templateUrl: 'js/features/components/driver/driver.html',
        controller: DriverCtrl,
        controllerAs: 'DriverVM',
        bindToController: true
    }
};

function DriverCtrl() {
    var vm = this;
}