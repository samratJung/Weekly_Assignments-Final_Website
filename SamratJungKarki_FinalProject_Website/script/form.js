


function contactUsValidate()
{
    var userName = document.contactUs.username.value;
    var userPassword = document.contactUs.password.value;
    var userEmail = document.contactUs.email.value;
    var filter = /^([a-zA-Z])+$/;
    var validuserName = userName.match(filter);
    var passfilter = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var validpassword = userPassword.match(passfilter);
    var emailfilter = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/ ;
    
    var validuserEmail= userEmail.match(emailfilter);
    
        if(userName == "" && userPassword == "" && userEmail == "")
        {
            document.getElementById("contactUsError").innerHTML = "All Fields are required";
            document.contactUs.username.focus();
            return false;
            
        }
        else if(userName == "" || validuserName ==  null)
        {
            document.getElementById("contactUsError").innerHTML = "Username is Required. Only contains characters";
            colorChange = document.getElementById("contactUsError");
            colorChange.style.color = "red";
            document.contactUs.username.focus();
            return false; 
            
        }
       
        else if(userPassword == ""  || validpassword == null)
        {
            document.getElementById("contactUsError").innerHTML = "Password is Required and must be a Complex Password between 6 to 16 Character";
            document.contactUs.password.focus();
            return false;
        }
        else if(userEmail == "" ||  validuserEmail == null)
        {
            document.getElementById("contactUsError").innerHTML = "Email is Required it must be email format";
            document.contactUs.email.focus();
            return false;
        }
        else {
            
            colorChange = document.getElementById("contactUsError");
            colorChange.style.color = "green";
            document.getElementById("contactUsError").innerHTML = "Everything is okay";
            alert("Done, Good to Go!");
            return false;
            
        }
        
        return true;
    
}