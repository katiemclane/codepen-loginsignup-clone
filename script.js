$('document').ready(function() {
	$('.signup-form').hide();
	$( ".signup-form-btn" ).click(function() {
		$('.signup-form').show()
 		$('.login-form').hide()
 		$('.signup-form-btn').addClass('active')
 		$('.login-form-btn').removeClass('active')

	});
	$( ".login-form-btn" ).click(function() {
		$('.signup-form').hide()
 		$('.login-form').show()
 		$('.signup-form-btn').removeClass('active')
 		$('.login-form-btn').addClass('active')

	});
	//listen for click on login
	$('.btn-login').click(function(){
		var user = Object.create(NewUser)
		loginUser.username = $('#login-username-field').val()
		loginUser.password = $('#login-password-field').val()
		var response=codepen.api.login(user)
		console.log(response)
	//instantiate an object wirh username and pass
	

	//call the login method and passit our previously instantiated object and handle the response
	});
});

/*############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')
	*/
