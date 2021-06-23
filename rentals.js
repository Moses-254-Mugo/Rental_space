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


function validate(){
    var a = document.getElementById("input-user").value;
    var b = document.getElementById("input-pwd").value;
    var c = document.getElementById("validate-user");
    var d = document.getElementById("validate-pwd");
    if(a === null || a === "" && b != ""){
       c.style.display = "block";
       d.style.display = "none";
       return false;
    }

    else if(a === null || a === "" ){
    c.style.display = "block";
    d.style.display = "none"
    return false;
    }

    else if (b === null || b === ""){
        d.style.display = "block";
        c.style.display = "none"
        return false
    }
    
    else{
        alert("Login successful");
        c.style.display = "none";
        d.style.display = "none";
        return true;
    }
}

function validate1(){
    var a = document.getElementById("input-user").value;
    var b = document.getElementById("input-pwd").value;
    var c = document.getElementById("input-pwd2").value;
    var d = document.getElementById("validate-user1");
    var e = document.getElementById("validate-pwd1");
    var f = document.getElementById("validate-pwd2");
    var s = document.getElementById("validate-pwd3");
    if(a === null || a === "" && b != ""){
       d.style.display = "block";
       e.style.display = "none";
       return false;
    }

    else if(a === null || a === "" ){
    d.style.display = "block";
    e.style.display = "none"
    return false;
    }

    else if (b === null || b === ""){
        e.style.display = "block";
        d.style.display = "none"
        return false
    }
    else if(c === null || c === ""){
        f.style.display = "block";
        e.style.display = "none";
        s.style.display = "none"
    }
    else if (b != c){
        s.style.display = "block";
        f.style.display = "none";
        e.style.display = "none";
        return false;
    }    
    else{
        alert("Account has been created");
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        s.style.display = "none";
        return true;
    }
}
