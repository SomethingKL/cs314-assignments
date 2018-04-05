// Ross Brandt
alert(charSwap());

// prompt for the user for a string
function charSwap(){
	let response;
	while((response = prompt("Enter something.")) == "");
	if(!response) return null;
	
	let last = response.length-1;
	return response[last] + response.substring(1,last) + response[0];
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