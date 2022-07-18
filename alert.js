"use strict";
let currentUserLogin, currentUserPassword;
currentUserLogin = prompt("Login?",'');
if (currentUserLogin === "Admin")
{
    currentUserPassword = prompt("Passwor?",'');
    if (currentUserPassword === "secretPassword")
    {
        alert("Wellcome!");
    }
    else if (currentUserPassword===null || currentUserPassword === "")
    {
        alert("Closed!");
    }
    else
    {
        alert("Invalid password!");
    }
}
else if (currentUserLogin === null || currentUserLogin === "")
{
    alert("Closed!");
}
else
{
    alert("I dont know you!");
}