
      function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "MedPhyMoh" && password == "radioactive"){
   location="QKPIs.html";
  }
  else{
    alert("Invalid username or password");
    }
  return false;
  }   




