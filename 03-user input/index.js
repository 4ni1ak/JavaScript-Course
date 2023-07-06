//How to accept user input

//Easy way with window prompt
// let username = window.prompt("whats is your name?");
// comlole.log(username);

//Difficulty way html textbox
let username ;
document.getElementById("myButton").onclick=function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML="Hello "+ username;
}