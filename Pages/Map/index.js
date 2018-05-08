function myMap() {
	let amsterdam = new google.maps.LatLng(42, -115);
	let gonzaga = new google.maps.LatLng(47.665529, -117.401645);
	let bay = new google.maps.LatLng(37.732956, -122.502953);
	let seattle = new google.maps.LatLng(47.620422, -122.349358);

	let mapCanvas = document.getElementById("map");
	let mapOptions = {center: amsterdam, zoom: 5};
	let map = new google.maps.Map(mapCanvas, mapOptions);

	let mySchool = new google.maps.Circle({
		center: gonzaga,
		radius: 50000,
		strokeColor: "#0000FF",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#0000FF",
		fillOpacity: 0.4
	});
	mySchool.setMap(map);

	let cityOne = new google.maps.Circle({
		center: bay,
		radius: 50000,
		strokeColor: "#0000FF",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#0000FF",
		fillOpacity: 0.4
	});
	cityOne.setMap(map);

	let cityTwo = new google.maps.Circle({
		center: seattle,
		radius: 50000,
		strokeColor: "#0000FF",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#0000FF",
		fillOpacity: 0.4
	});
	cityTwo.setMap(map);
}
