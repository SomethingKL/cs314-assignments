// Ross Brandt

// get the data from the users section of jsonplaceholder
$.get('https://holidayapi.com/v1/holidays?key=ebaee58e-f958-4970-b7c6-828eb1ea5927&country=US&year=2017&month=05')
 .done((data) => populateHolidays(data.holidays))
 .fail(() => {});

// for each user get information and display
let populateHolidays = (day) => day.forEach(
	(day) => $('#days').append(
		generateHoliday({
			name      : day.name,
			date      : day.date,
			observed  : day.observed,
			bank      : day.public
		})
	)
);

let generateHoliday = (info) => {
	let container = document.createElement("section");
	container.setAttribute('id', "card");
	
	let holiday = document.createElement("section");
	holiday.setAttribute('id', "day");
	
	let title = document.createElement("h3");
	title.setAttribute('id', "name");
	title.innerHTML = info.name;
	holiday.append(title);
	
	let description = document.createElement("p");
	description.setAttribute('id', "info");
	description.innerHTML = "Takes place on " +info.date+". ";
	holiday.append(description);
	
	description = document.createElement("p");
	description.setAttribute('id', "info");
	description.innerHTML = "Celebrated on "+info.date+".";
	holiday.append(description);
	
	container.append(holiday);
	$("#days").append(container);
}