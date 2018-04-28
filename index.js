// Ross Brandt

// get the data from the users section of jsonplaceholder
$.get('https://jsonplaceholder.typicode.com/users')
 .done((data) => populateUsers(data))
 .fail(() => {});

// for each user get information and display
let populateUsers = (users) => users.forEach(
	(user) => $('#users').append(
		generateUser({
			id        : user.id,
			name      : user.name,
			email     : user.email,
			company   : user.company.name
		})
	)
);

// generate all the user elements within a div
let generateUser = (user) => {
	// create user elements
	let userSection = document.createElement("div");
	let userName = document.createElement("h4");
	let userEmail = document.createElement("p");
	let userCompany = document.createElement("p");

	// populate user info
	userSection.className = "userSection";
	userSection.setAttribute('id', `user${user.id}`);
	userName.innerHTML = user.name;
	userSection.append(userName);
	userEmail.innerHTML = user.email;
	userSection.append(userEmail);
	userCompany.innerHTML = user.company;
	userSection.append(userCompany);

	// add button elements
	let userButtons = document.createElement("div");
	userButtons.className = "userButtons";

	// todo button
	let todoButton = document.createElement("button");
	todoButton.className = "button";
	todoButton.innerHTML = "Show Todos";
	todoButton.setAttribute("notLoaded", true);
	todoButton.onclick = () => {
		if($(todoButton).attr("notLoaded")){
			$.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
			 .done((data) => {
				$(userButtons).slideToggle();
				loadTodos(data, user.id);
				$(userButtons).slideToggle();
			})
			.fail(() => {
				console.log("failed");
			});
		} else {
			todoButton.setAttribute("notLoaded", false);
			console.log("test");
		}
	};
	userButtons.append(todoButton);
	
	// albums button
	/*let todoButton = document.createElement("div");
	todoButton.className = "button";
	todoButton.innerHTML = "Show Todos";
	todoButton.setAttribute("loaded", false);
	todoButton.click(() => {
		if(!$(todoButton).attr("loaded")){
			$.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
			 .done((data) => {
				$(todoContainer).slideToggle();
				loadTodos(data, user.id);
				$(todoContainer).slideToggle();
			})
			.fail(() => {
				console.log("failed");
			});
		} else {
			
		}
	});*/
	//userButtons.append(todoButton);
	
	userSection.append(userButtons);

	$("#users").append(userSection);
	return user;
}

// load the todos into a container
function loadTodos(data, userID) {
	let todoList = document.createElement("div");
	
	todoList.className = "todoList";
	todoList.id = `todosList${userID}`;
	
	let todosHeader = document.createElement("h5");
	todosHeader.innerHTML = "Todos:";

	for (let todo of data){
		let todoItem = document.createElement("div");
		todoItem.className="todoItem";
		if (todo.completed === true){
			todoItem.innerHTML=`<i class="far fa-check-square" style="margin-right:5px;"></i>${todo.title}`;
		} else {
			todoItem.innerHTML=`<i class="far fa-square" style="margin-right:5px;"></i>${todo.title}`;
		}

		todoList.append(todoItem);
	}
	$(`#user${userID}`).append(todoList);
}