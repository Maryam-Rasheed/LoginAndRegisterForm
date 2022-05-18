function login() {
  document.getElementById("login-form").style.display="block";
  document.getElementById("register-form").style.display="none";
  document.getElementById("login").classList.add('active');
  document.getElementById("register").classList.remove('active');
}
function register()
{
  document.getElementById("login-form").style.display="none";
  document.getElementById("register-form").style.display="block";
  document.getElementById("register").classList.add('active');
  document.getElementById("login").classList.remove('active');
}


var linksContainer = document.getElementById("pageLinks");
var links = linksContainer.getElementsByClassName("link");


// function loginForm(){
//   if(document.getElementById('email').value == 'maryam' && 
//     document.getElementById('password').value == '123'){
//     document.getElementById('email').value = "";
//     document.getElementById('password').value = "";
//     document.getElementById('login_btn').innerHTML="Sign out";
//   }
//   else{
//     alert("User not found");
//   }
// }

