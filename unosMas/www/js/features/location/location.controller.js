angular
	.module('unoMas.location')
	.controller('LocationCtrl', LocationCtrl);

function LocationCtrl($scope, $state, $cordovaGeolocation) {
	var vm = this;

	vm.continue = function(){
		$state.go('selection');
	};

	var options = {timeout: 10000, enableHighAccuracy: true};
 
  	$cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    	var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
	    var mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
 
    	$scope.map = new google.maps.Map(document.getElementById("location"), mapOptions);
 
	}, function(error){
	    console.log("Could not get location");
	});

}