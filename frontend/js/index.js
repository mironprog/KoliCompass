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

function searchFunction()
{
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-bar');
  filter = input.value.toUpperCase();
  ul = document.getElementById('universities');
  li = ul.getElementsByTagName('li');

  
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
