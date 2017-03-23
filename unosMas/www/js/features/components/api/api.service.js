angular
	.module('unoMas.component.api')
	.service('api', ApiService);

function ApiService($http) {

	function getUser(userID){
		return $http.get('https://randomuser.me/api/?seed=' + userID)
        .then(function(resp) {
        	//resp.data.profilePicture = decodeURIComponent(resp.data.profilePicture);
        	
        	return {
        	firstName: resp.data.results[0].name.first,
        	lastName: resp.data.results[0].name.last,
        	profilePicture: resp.data.results[0].picture.large,
        	username: resp.data.results[0].login.username,
        	id: userID

        	};
        });
}

	return {
		user: getUser
	}
}