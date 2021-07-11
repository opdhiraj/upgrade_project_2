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