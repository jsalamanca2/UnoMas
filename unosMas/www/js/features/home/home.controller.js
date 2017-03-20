angular
	.module('unoMas.home')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl(patients, $cordovaCamera,$state) {
	var vm = this;

	vm.patientInfo = {
		firstName: '',
		lastName: '',
		dob: ''
	}

	vm.continue = function() {
		var patient = new patients.Patient(
			vm.patientInfo.firstName,
			vm.patientInfo.lastName,
			vm.patientInfo.dob
		);

		patients.patients.push(patient);
		if (window.Camera){
			var options = {
		      quality: 50,
		      destinationType: Camera.DestinationType.DATA_URL,
		      sourceType: Camera.PictureSourceType.CAMERA,
		      allowEdit: true,
		      encodingType: Camera.EncodingType.JPEG,
		      targetWidth: 100,
		      targetHeight: 100,
		      popoverOptions: CameraPopoverOptions,
		      saveToPhotoAlbum: false,
			  correctOrientation:true
		    };

		    $cordovaCamera.getPicture(options).then(function(imageData) {
		      var image = document.getElementById('myImage');
		      image.src = "data:image/jpeg;base64," + imageData;
		    }, function(err) {
		      // error
		    });
		} else {
			$state.go('login');
		}
	}
}