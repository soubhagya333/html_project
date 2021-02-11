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