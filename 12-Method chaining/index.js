let fullName = "Nur Yoldas";
let firstName;
let lastName;

let spaceIndex = fullName.indexOf(" ");
if (spaceIndex !== -1) {
  firstName = fullName.slice(0, spaceIndex);
  lastName = fullName.slice(spaceIndex + 1);
} else {
  firstName = fullName;
}

console.log(firstName);
console.log(lastName);