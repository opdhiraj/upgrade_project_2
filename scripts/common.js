console.log("this is for common Js page");
createNavHeaderTemplate();
createLoginTemplate();
createFooterHeadeerTemplate();
createContactUsTemplate();


function displayLoginForm() {
    document.getElementById("loginform").style.display = "block";
}



// function doLogout() {
//     sessionStorage.clear();
//     window.location.reload();
// }

function changeLoginStatusText() {
    let signInElement = document.getElementById("login-button").innerText = "logout";
    // signInElement.onclick = doLogout();
}


if (sessionStorage.isLoggedIn === true) {
    document.getElementById("login-buttom").onclick = doLogout();

}





function doLogin() {
    let username = document.getElementById("username").value;
    let passward = document.getElementById("password").value;
    if (username === "admin" && passward === "admin") {
        alert(`welcome ${username}`);
        sessionStorage.username = "admin";
        sessionStorage.isLoggedIn = true;
        changeLoginStatusText();
        document.getElementById("loginform").style.display = "none";
        // hideLogin();


    }
    else {
        alert("Invalid");
    }
}

//  document.getElementById("loginButton").click=doLogin;


function closeLoginForm() {
    document.getElementById("loginform").style.display = "none";
}




function createLoginTemplate() {
    let loginTemplate = `
   <div  id="login1"> 
                      
        <span class="close" onclick="closeLoginForm()">&times;</span> 
        <h4>Please Login</h4> 
        <input type="text" placeholder="Username" id="username" /> 
        <br /> 
        <input type="password" placeholder="Password" id="password" /> 
        <br /> 
        <br/>
        <br/>
        <br/>


        <button id="loginButton" onClick="doLogin()">Login</button> 
    </div>`;

    document.getElementById("loginform").innerHTML = loginTemplate;
}





function createNavHeaderTemplate() {
    let headertemplate = `
      <div class="headerbg">
          <a href="index.html">
              <img src="assests/images/logo.png" class="logo-image" />
             
          </a> 
      </div> 

      <div class="nav-links">
         
          <a class="btn btn-light" id="login-button" onclick="displayLoginForm()" ><span>Login</span></a> 
         
      </div>`;
    document.getElementById("navbar").innerHTML = headertemplate;
}

function contactFormDisplay(){
    document.getElementById("contForm").style.display="block";
}



function createFooterHeadeerTemplate() {
    let footerTemplate = `
   
         <div>
          <a class="btn btn-info" id="contactButton" onclick="contactFormDisplay()"> <span>Contact Us</span></a>
    
          </div>

        <div id="copyright">
        <p> &copy;2020 ROOM SEARCH PVT. LTD. </p>
         </div>

        <div id="socialMediaDetail">

          <a href="https://www.facebook.com" target="_blank">
          <img class="social-media-image" src="assests/images/facebook.png" height="20" width="22">
           </a>


         <a href="https://www.instagram.com" target="_blank>">
         <img class="social-media-image" src="assests/images/instagram.png" height="20" width="22">

          </a>


         <a href="https://twitter.com" target="_blank>">
         <img class="social-media-image" src="assests/images/twitter.png" height="20" width="22">

          </a>
        </div>

    </div> `;

    
    document.getElementById("footerIn").innerHTML = footerTemplate;


}

 function hideContactForm(){
     document.getElementById("contForm").style.display="none";

}


function createContactUsTemplate(){
    let contactUsTemplete=`
    <div class="contactform">
    <h2> Contact Us </h2>

    <p>Thank you for reaching out!!!</p>
    <p>Please enter your email and we will get back to you</p>
    <input type="email" name="email" placeholder="Enter your email" required>
    <br/>
     <button class="btn btn-secondary" id="submitButton" onclick="hideContactForm()">Submit</button>
     </div>`;
     
     document.getElementById("contForm").innerHTML=contactUsTemplete;
}
















