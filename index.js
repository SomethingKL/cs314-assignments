// Ross Brandt
step4();
step5();
step7();
step11();

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

// Question 15
function step15(first, second, third = ""){
	return first + second + third;
}

// Question 16
let step16 = function(first, second, third = ""){
	return first + second + third;
}

// Question 17
let step17 = (first, second, third = "") => {return first + second + third;}

// Questions 15 - 17
console.log("declaration ", step15("Neither", "Here", "NorThere"));
console.log("expression ", step16("Neither", "Here", "NorThere"));
console.log("lambda ", step17("Neither", "Here", "NorThere"));