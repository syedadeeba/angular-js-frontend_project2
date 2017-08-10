/**
 * UserService for User module
 */
app.factory('UserService', function($http) {
	var userService = {}

	userService.registerUser = function(user) {
		return $http.post("http://localhost:5555/backend_project2/registration", user)

	}
	userService.login = function(user) {
		return $http.post("http://localhost:5555/backend_project2/login", user)
	
	}
	userService.logout = function() {
		return $http.get("http://localhost:5555/backend_project2/logout")
	
	}
	
	userService.getUserByUsername = function() {
		return $http.get("http://localhost:5555/backend_project2/getuserdetails")
	
	}
	
	userService.updateUserProfile = function(user) {
		return $http.put("http://localhost:5555/backend_project2/updateprofile",user)
	
	}

	return userService;
})