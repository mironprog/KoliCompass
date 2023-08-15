function openLogin() 
{
    document.getElementById('login-div').style.display = "block";
    document.getElementById('login-div').style.boxShadow = "0 0 0 9999px #000000b0";
}

function closeLogin()
{
    document.getElementById('login-div').style.display = "none";
}

function sendEmail()
{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")
}

function showList()
{
    document.getElementById('egyetem-list').style.display = "block";
    document.getElementById('search-bar').style.borderBottomLeftRadius = "0px";
    document.getElementById('search-bar').style.borderBottomRightRadius = "0px";
    document.getElementById('egyetem-list').style.borderBottomLeftRadius = "25px";
    document.getElementById('egyetem-list').style.borderBottomRightRadius = "0px";

}