let firstName = "Anıl"; //strings
let age =20; //number
let student = true; //booleans

console.log("Hello", firstName); 
console.log("You are", age, "years old"); 
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;