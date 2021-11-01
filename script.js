function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }


  function authenticate(){
    var user = document.getElementById('username').value 
    var pass = document.getElementById('password').value 
    if (user == 'admin' && pass == 'admin') {
    document.getElementById('success').style.display = 'block'
    }
    else{
        document.getElementById('error').style.display = 'block'
    }
    
}

window.onbeforeunload = function() {
    return "you can not refresh the page";
}