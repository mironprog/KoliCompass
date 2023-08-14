function openLogin() 
{
    document.getElementById('login-div').style.display = "block";
}

function closeLogin()
{
    document.getElementById('login-div').style.display = "none";
}

function sendEmail()
{
    var link = "mailto:bmaresz90@gmail.com"
             + "?cc=bmaresz90@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link
}
