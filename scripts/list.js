// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_class=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2020-01-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2");
// xhr.setRequestHeader("x-rapidapi-key", "16bb4a759cmsh97369a373ca8763p194038jsnaa21aab49247");
// xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");

// xhr.send(data);


fetch("https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_class=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2020-01-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "16bb4a759cmsh97369a373ca8763p194038jsnaa21aab49247",
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});