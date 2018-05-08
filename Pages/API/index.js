// Ross Brandt

// get the data from the users section of jsonplaceholder
$.get('https://rickandmortyapi.com/api/character/')
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
				todoButton.setAttribute("notLoaded", false);
				$(userButtons).slideToggle();
				loadTodos(data, user.id);
				$(userButtons).slideToggle();
			})
			.fail(() => {
				console.log("failed");
			});
		} else {
			$(`#todoList${user.id}`).toggle();
			$(`#albumList${user.id}`).hide();
		}
	};
	userButtons.append(todoButton);
	
	// albums button
	let albumButton = document.createElement("button");
	albumButton.className = "button";
	albumButton.innerHTML = "Show Albums";
	albumButton.setAttribute("notLoaded", true);
	albumButton.onclick = () => {
		if($(albumButton).attr("notLoaded")){
			$.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
			 .done((data) => {
				albumButton.setAttribute("notLoaded", false);
				$(userButtons).slideToggle();
				loadAlbums(data, user.id);
				$(userButtons).slideToggle();
			})
			.fail(() => {
				console.log("failed");
			});
		} else {
			$(`#albumList${user.id}`).toggle();
			$(`#todoList${user.id}`).hide();
		}
	};
	userButtons.append(albumButton);
	
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

// load the albums into a container
function loadAlbums(data, userID) {
	let albumList = document.createElement("div");
	
	albumList.className = "albumList";
	albumList.id = `albumList${userID}`;
	
	let AlbumHeader = document.createElement("h5");
	AlbumHeader.innerHTML = "Todos:";

	for (let album of data){
		let albumItem = document.createElement("div");
		albumItem.className="albumItem";
		albumItem.innerHTML=`- ${album.title}`;

		albumList.append(albumItem);
	}
	$(`#user${userID}`).append(albumList);
}