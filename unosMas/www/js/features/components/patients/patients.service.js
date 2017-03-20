angular
	.module('unoMas.component.patients')
	.service('patients', PatientsService);

function PatientsService() {
	var patients = [];

	function Patient(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + ' ' + lastName;
		this.dob = dob;
	}

	//
	patients.push(new Patient('John', 'Doe', 2131));
	patients.push(new Patient('John', 'Doe', 2131));
	patients.push(new Patient('John', 'Doe', 2131));


	return {
		patients: patients,
		Patient: Patient
	}
}