function formValidation() {
    var username = document.getElementById('user');
    console.log(username)
    console.log(username.value)

   // var username = document.getElementById('username').value;
    
    // localStorage.setItem('userName',user);
    // var username=localStorage.getItem(username);
    // var password=localStorage.getItem(password);


    if(username.value=='') {
        var msg = document.getElementById("msg")
        console.log("username empty")
        alert('plz enter username');
        //textbox.style.border='2px solid red';
        username.style.border='2px solid red'
        return false;
    }
     
    // if(password=='') {
    //     alert('plz enter password');
    //     textbox.style.border='2px solid red';
    //     return false;
    // }
    if (username.value.length < 5 || username.length > 10) {
        alert('plz enter name 5 to 10 char max');
        username.style.border = '2px solid red';
        return false;
    }

    var genderVal=false;

}

function login() {
    var username = document.getElementById("user");

    console.log(username);
    console.log(username.value);
    var password = document.getElementById("password");
    console.log(password);
    console.log(password.value);

    if (username.value == "") {
      var msg = document.getElementById("msg");
      console.log("username empty");
      alert("plz enter username");
      username.style.border = "2px solid red";
      return false;
    }
    if (username.value.length < 5 || username.length > 10) {
      alert("plz enter name 5 to 10 char max");
      username.style.border = "2px solid red";
      return false;
    }

    if (password.value == "") {
      var msg = document.getElementById("msg");
      console.log("password empty");
      alert("plz enter password");
      password.style.border = "2px solid red";
      return false;
    }
    if (password.value.length < 5 || password.length > 10) {
      alert("plz enter password 5 to 10 char max");
      password.style.border = "2px solid red";
      return false;
    }
  }