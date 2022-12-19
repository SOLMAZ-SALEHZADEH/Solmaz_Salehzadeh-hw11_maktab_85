const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

class LogIn{
	constructor(){

	}

	addRightPanel(){
		container.classList.add("right-panel-active");
	}
	removeRightPanel(){
		container.classList.remove("right-panel-active");
	}
}
const LogInPage = new LogIn()
signUpButton.addEventListener('click', () => LogInPage.addRightPanel());

signInButton.addEventListener('click', () => LogInPage.removeRightPanel());
// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });