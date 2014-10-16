_.templateSettings.interpolate = /{([\s\S]+?)}/g;

function getUserName(gitHubUsername) {
	this.username = gitHubUsername;

	this.init();
}
// Create a bunch of functions on the getUserName prototype
// that will be available for use by the instance (cookie) of 
// the getUserName object. The second step of the getUserName
// constructor calls the init function on the instance that 
// then executes the various functions we add to the getUserName
// prototype.


// These 2 functions on the getUserName prototype are getting
// data from the GitHub API.
getUserName.prototype.getUserInfo = function() {
	return
	$.get('https://api.github.com/users/' + this.username) // this.username is equal to the instance object with the value of username we passed in as an argument
	.then(function(data, successMessage, promise) { // the 
		return data;
	})
}


getUserName.prototype.getRepoInfo



// This function is simply loading the html templates we pass 
// into its argument and returning them as a variable. I suppose that
// it is using Express to request the files. It's like our own
// API.
getUserName.prototype.loadTemplateFile


// These 2 functions are responsible for injecting the 
// GitHub API data into the appropriate HTML files served up
// by our loadTemplateFile function
getUserName.prototype.putProfileDataOnPage


getUserName.prototype.putRepoDataOnPage

// This init function is called by the getUserName constructor
// when an instance is created and calls all the previously
// defined methods on the getUserName instance.
getUserName.prototype.init = function() {
	var self = this;

	$.when(
		this.getUserInfo(),

	).then(function() {
		self.putProfileDataOnPage
		self.putRepoDataOnPage
	});
};


window.onload = app;

// This function executes the creation of an instance of
// the getUserName object and passes it an argument that
// is equal to the username of the GitHub profile who's
// data we are requesting.
function app() {
	//create an instance of getUserName using it's constructor
	var user = new getUserName('prufrock123');
}