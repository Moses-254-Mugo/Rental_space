function login(){
    document.getElementById("signIN").style.display = "block"
    document.getElementById("signUP").style.display = "none"
}

function signup(){
    document.getElementById("signUP").style.display = "block"
    document.getElementById("signIN").style.display = "none"
}

function hideForm(){
    document.getElementById("signIN").style.display = "none"
    document.getElementById("signUP").style.display = "none"
}

function validate1(){
    var x = document.getElementsByClassName("input-user").value;
    var y = document.getElementsByClassName("input-pwd").value;
    var z = document.getElementById("input-pwd2").value;
    if(x === "");
    if(y === "");
    if(z === ""){
        alert("Please enter your details");
        alert("please enter a valid password");
        alert("please confirm your password");
    }
    else{
        alert("Account created successfully")
    }
}

function validate(){
    var x = document.getElementById("input-user").value;
    var y = document.getElementById("input-pwd").value;
    if(x === "");
    if(y === ""){
        alert("Please enter your details");
        alert("please enter a valid password");
    }
    else{
        alert("Login successful")
    }
}