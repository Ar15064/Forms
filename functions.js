// var textInput = document.getElementById("email").value
// var textInput = document.getElementById("password")

function putToast() {

}

function SigninA() {

   let check =  document.getElementById("Email").value;
   let checkP = document.getElementById("Password").value;
   
    if(check == "Yes") {
        // document.body.style.color = 'darkgreen'; works
        window.alert("It worked");
        
    }

    else if(check.includes("@") && checkP.length > 1) {
        alert("Sending you to another website");
        window.open("http://127.0.0.1:5500/more.html");


    }

    else if(checkP.length < 1) {
        alert("Enter a valid Password")
    }

    else if(check.includes("")) {
        alert("You didnt put a valid email")
        

    }

    

    


    // else{
    //     alert("You didn't put any text");

    //     document.getElementsByClassName("border").value.style.backgroundColor = "red";

    // }
}




