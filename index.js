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
	let response;
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
// array of numbers
function nums(){
	let response;
	while((response = prompt("Enter numbers separated by commas.")) == "");
	if(!response) return null;
	
	let list = response.split(",");
	if(list.length < 2) return ask(msg);
	else return list;
}
function numbers(){
	let list = nums();
	let a = list[0];
	list[0] = list[list.length-1];
	list[list.length-1] = a;
	return list;
}
function longest(){
	let msg = "Provide three words separated by commas."
	
	let items = ask(msg);
	let longest = items[0];
	if(items[1].length > longest.length)
		longest = items[1];
	if(items[2].length > longest.length)
		longest = items[2];
	return longest;
}