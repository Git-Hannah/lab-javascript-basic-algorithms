// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");

const hacker1 = 'Agus';
console.log('The drivers name is', hacker1);

const hacker2 = 'Hannah';
console.log('The drivers name is',hacker2);

console.log('The length of Hacker 1 s name is: ', hacker1.length);

if (hacker1.length > hacker2.length) {
  console.log(hacker1, 's name is longer');
} else if (hacker1.length < hacker2.length) {
  console.log(hacker2, 's name is longer');
}else {
  console.log('Your names are equally long!');
}

let result = "";

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i]);
    result += hacker1[i].toUpperCase() + ' ';
}

console.log(result)

function reverseString(str) {
  let splitString = str.split('');

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join('');

  return joinArray;
}
reverseString(hacker1);