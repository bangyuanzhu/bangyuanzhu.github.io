let myHeading = document.querySelector('#Welcomemessage');
let myButton = document.querySelector('button');

function setUsername()
{
    let Username = prompt("I appreciate if you can tell your name before leaving comments")
    if (!Username || Username === null)
    {
        setUsername();
    }
    else
    {
        localStorage.setItem('name', Username);
        myHeading.innerHTML = "Welcome "+ Username + " to my blog: to record my life and work";
    }
}

if(!localStorage.getItem('name'))
{
    setUsername();
}
else
{
    let Storedname = localStorage.getItem('name');
    myHeading.textContent = "Welcome "+ Storedname + " to my blog: to record my life and work";
}

myButton.onclick = function()
{
    setUsername();
}