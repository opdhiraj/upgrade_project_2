console.log("this is for testing");

let divEl=document.createElement('div');
divEl.id="divID";

divEl.setAttribute("width","100%");
divEl.style.display="flex";
divEl.style.justifyContent="space-evenly";
divEl.style.padding="20px";
// divEl.style.alignItems = "flex-start";
console.log(divEl);
 
document.getElementsByClassName("city-cart")[0].appendChild(divEl);



let div1=document.createElement("div");
div1.id="divID1";
let image1=document.createElement("img");
image1.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg");
image1.setAttribute("width", "150px");
image1.setAttribute("height", "150px");
image1.setAttribute("alt", "chennai");
image1.style.margin="60px";
image1.style.display="flex";
image1.style.boxShadow="10px 10px 10px grey"
image1.style.borderRadius="25px";
image1.innerText="chennai";


 divEl.appendChild(div1);
div1.appendChild(image1);

let div2=document.createElement("div");
let image2=document.createElement("img");
image2.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg");
image2.setAttribute("width", "150px");
image2.setAttribute("height", "150px");
image2.setAttribute("alt", "chennai");
image2.style.margin="60px";
image2.style.boxShadow="10px 10px 10px grey"
image2.style.borderRadius="25px";

divEl.appendChild(div2);
div2.appendChild(image2);

let div3=document.createElement("div");
let image3=document.createElement("img");
image3.setAttribute("src","https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg");
image3.setAttribute("width", "150px");
image3.setAttribute("height", "150px");
image3.setAttribute("alt", "chennai");
image3.style.margin="60px";
image3.style.borderRadius="25px";
image3.style.boxShadow="10px 10px 10px grey"

divEl.appendChild(div3);
div3.appendChild(image3);


let div4=document.createElement("div");
let image4=document.createElement("img");
image4.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg");
image4.setAttribute("width", "150px");
image4.setAttribute("height", "150px");
image4.setAttribute("alt", "chennai");
image4.style.borderRadius="25px";
image4.style.margin="60px";
image4.style.boxShadow="10px 10px 10px grey"


divEl.appendChild(div4);
div4.appendChild(image4);









