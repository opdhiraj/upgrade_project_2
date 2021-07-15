console.log("this is index.js")


let c = document.getElementById("new-city-cart").style.opacity = 0;


let handleview = () => {

    if (c === 0) {
        document.getElementById("new-city-cart").style.opacity = 1;
        document.getElementById("viewmore").innerHTML = "View Less";
        console.log(c);


    }


}
document.getElementById("viewmore").onclick = handleview;





fetch("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km", {
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