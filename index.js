// Ross Brandt
alert(upperLower());

// prompt the user for a string
// then swap the first and last letter
function charSwap(){
	let response;
	while((response = prompt("Enter something.")) == "");
	if(!response) return null;
	
	let last = response.length-1;
	return response[last] + response.substring(1,last) + response[0];
}
// prompt the user for a string
// then if not already there add 'Hi' to the front
function appendHi(){
	let response;
	while((response = prompt("Enter something.")) == "");
	if(!response) return null;
	
	return (response.startsWith("Hi")) ? response : "Hi" + response;
}
// prompt the user for a string of at least 3 characters
// take the last three characters and put them in front
function lastThree(){
	let response;
	while((response = prompt("Enter something with 3 characters.")).length < 3);
	if(!response) return null;
	
	let pivot = response.length-3;
	return response.substring(pivot) + response.substring(0,pivot);
}
// prompt the user for a list of items separated by commas
function ask(msg){
	while((response = prompt(msg)).length < 2);
	if(!response) return null;
	
	let list = response.split(",");
	if(list.length != 3) return ask(msg);
	else return list;
}
// list of ingredients
function ingredients(){
	let msg = "Provide three of you favorite ingredients. (ex. a, b, c)"
	
	let items = ask(msg);
	return `Tonights meal consists of '${items[0]}' grilled with '${items[1]}' and '${items[2]}' for dessert.`; 
}
// either upper case or lower case
function upperLower(){
	let response;
	while((response = prompt("Enter something.")) == "");
	if(!response) return null;
	
	return (response.length < 3) ? response.toUpperCase() :
	response.substring(0,3).toLowerCase() + response.substring(3);
}


// Question 4
function step4(){
	let answer = confirm("Delete all local files?");
	if (answer)	
		alert("Files deleted.");
	else
		alert("Cancelled.");
}

// Question 5
function step5(){
	(confirm("Reformat hard drive?")) ?
		alert("Reformating...") :
		alert("Cancelled.");
}

// Question 7
function step7(){
	let number = prompt("What's your favorite number?");
	
	(number == "") ? alert("I don't have one either.") :
	(isNaN(number)) ? alert("That's not a base I'm familiar with.") :
	(number) ? alert("Interesting.") : alert("Cancelled.");
}

// Question 9
function step9(first, last, user){
	return {
		firstName : first,
		lastName : last,
		userName : user,
		email : function(address) {return this.userName + "@" + address;}
	}
}

// Question 10
function step10(inputObject, additions = null){
	return (additions == null) ?
		Object.assign({}, inputObject) :
		Object.assign(additions, inputObject) ;
}

// Questions 11 - 14
function step11(){
	let ross = step9("Ross", "Brandt", "rbrandt");
	let clone = step10(ross, { school : "Gonzaga" });
	
	console.log("Person ", ross);
	console.log("Student ", clone);
	
	console.log("email ", ross.email("gmail.com"));
	console.log("email ", clone.email("zagmail.gonzaga.edu"));
}

// Question 17
let step17 = (first, second, third = "") => {return first + second + third;}