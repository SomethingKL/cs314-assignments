// Ross Brandt

// selection
let gotoButtons = document.getElementById('selection').getElementsByTagName('button');
let gotoList = Array.prototype.slice.call(gotoButtons);
gotoList.forEach(function(element){
	element.addEventListener('click', function(){
		let value = parseInt(element.textContent);
		let loc = (value == 1) ? 200 :
			(value == 2) ? 400 :
			(value == 3) ? 650 : 1000;
		window.scrollTo(0,loc);
	});
});


// one
let colorButtons = document.getElementById('one').getElementsByTagName('button');
let colorList = Array.prototype.slice.call(colorButtons);
colorList.forEach(function(element){
	element.addEventListener('click', function(){
		let background = document.getElementById('one');
		let value = element.textContent.toLowerCase();
		background.style.backgroundColor = value;
	});
});

// two
let toggleButton = document.getElementById('two').getElementsByTagName('button');
let toggle = Array.prototype.slice.call(toggleButton);
toggle.forEach(function(element){
	element.addEventListener('click', function(){
		let background = document.getElementById('two');
		
		if(background.style.backgroundColor != 'pink'){
			background.style.backgroundColor='pink';
			event.target.innerText='Click for Orange';
		} else {
			background.style.backgroundColor='orange';
			event.target.innerText='Click for Pink';
		}
	});
});

// three
let listAdder = document.getElementById('three').getElementsByTagName('button');
let submit = Array.prototype.slice.call(listAdder);
submit.forEach(function(element){
	element.addEventListener('click', function(){
		let newText= document.getElementById('newText').value;
		let listEntry = document.createElement('li');
		
		listEntry.innerText = newText;
		document.getElementById('toAdd').appendChild(listEntry);
	});
});

// four
let listRemover = document.getElementById('four').getElementsByTagName('button');
let remover = Array.prototype.slice.call(listRemover);
submit.forEach(function(element){
	element.addEventListener('click', function(event){
		let list = document.getElementById ('toRemove');
		list.removeChild (event.target);
	});
});