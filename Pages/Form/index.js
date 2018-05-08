function getName(){
	let first = document.getElementById("first").value;
	if(first == "")
		return "";
	let last = document.getElementById("last").value;
	return first + " " + last;
}
function getEmail(){
	return document.getElementById("email").value;
}
function validateEmail(address){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address))
		return false;
	return true;
}

function printMessage(name, email){
	let msg = "Your name is: " + name;
	let nameField = document.createElement("LI");
	nameField.appendChild(document.createTextNode(msg));
	
	document.getElementById("messager").appendChild(nameField);
	
	msg = "Your email is: " + email;
	nameField = document.createElement("LI");
	nameField.appendChild(document.createTextNode(msg));
	
	document.getElementById("messager").appendChild(nameField);
	
	msg = "Your message is: " + document.getElementById("about").value;
	nameField = document.createElement("LI");
	nameField.appendChild(document.createTextNode(msg));
	
	document.getElementById("messager").appendChild(nameField);
	
	document.getElementById("myForm").reset();
}

function runChecks(){
	let name = getName();
	if(name == ""){
		alert("You haven't entered a name.");
		return;
	}
	let email = getEmail();
	if(email == ""){
		alert("You haven't entered an email.");
		return;
	}
	if(validateEmail(email)){
		alert("The email you have entered is invalid.");
		return;
	}
	printMessage(name, email);
}