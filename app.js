// JavaScript Total Recall

// ---- I. Variables & Datatypes
//---- A. Q&A ----
// How do we assign a value to a variable?
    let m=5
// How do we change the value of a variable?
    m= 7
// How do we assign an existing variable to a new variable?
    let n=m
// Remind me, what are declare, assign, and define?
//  Declaring a vaiable means establishing a name such as "const d" or "let g"
// Assigning mean giving a declared variable a value like "d=5" or "g=7"
//Defining a variable is combining declaring and assigning like "const d = 5" or "let g = 7"

// What is pseudocoding and why should you do it?
//pseudocoding is similiar to wire framing
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//30% of the time spent thinking and planning and 70% typing in the code and trying to get it to work



//---- B. Strings ----
//For all other questions that involve writing code, you can solve them via the following instructions.

//Create a variable called firstVariable
let firstVariable
//Assign it the value of the string "Hello World"
firstVariable = "Hello world"
//Change the value of this variable to some number
firstVariable = 8
//Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable
//Change the value of secondVariableto any string.
secondVariable = "aString"
//What is the value of firstVariable?
// the value of the first variable is 8
console.log(`The value of firstVariable is ${firstVariable}`)
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Naomi Crowder"
let greeting = "Hello, my name is"
 let newExpress = greeting + " " + yourName
 console.log(newExpress)


//ex: Hello, my name is Jean Valjean

// ---- C. Booleans ----
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
   console.log(true !== false);
   console.log(false === false === false === false === false !== true);
   console.log(false === false)
  console.log(e === 'Kevin');
   console.log(a + b === c); 
  // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a* a === d); 
// note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  // ----- D. The farm ----
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal = "cow"){
    console.log("moooo")
}else {
    console.log("Hey! You're not a cow.")
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// E. Driver's Ed

// Make a variable that holds a person's age; be semantic
let personsAge

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personsAge >= 16){
    console.log("Here are the keys!")
}else {
    console.log ("Sorry, you're too young.")
}



//---------------- II. Loops -----------------

//----- A. The Basics ------
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i=0; i<= 10; i++){
    console.log(i)
}
//Write a loop that will print out all the numbers from 10 up to and including 400
for (let j=10; j<=400; j++){
    console.log(j)
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let k = 12; k <= 4000; k += 3){
     console.log(k)
// }

//------ B. Get Even ------
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let l = 1; l <= 100; l++){
    if (l% 2 ===0){
        console.log(`${l} <-- is an even number`)
    } else{
        console.log(l)
    }
}

//------ C. Give me Five -------
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//For numbers divisible by both three and five, be sure your code prints both messages


for(p =1; p<=100; p++){
    if (p % 3 === 0 && p % 5 === 0) {
        console.log(`I found a ${p} High Five! Three is a crowd`)
    }else if (p % 3 === 0 ){
        console.log (`I found a ${p} Three is a Crowd`)
    }else if (p % 5 === 0 ) {
        console.log (`I found a ${p} High Five!`)
    }
    }





// ----- D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account = 0
//  for (let q = 1; q<= 10; q++){
//     bank_account += q
//  }
// console.log (bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0
 for (let q = 1; q<= 100; q++){
    bank_account += q * 2;
 }
console.log (bank_account);

//---------- III. Arrays & Control flow ------------

//---- A. Talk about it: ----
// What are the things in an array called?
// Elements  are the things inside of an array
// Do Arrays guarantee those things will be in order?
// Yes, arrays are ordered unlike objects.
// What real-life thing could you model with an array?
//you could model a guest list for an event using an array

//---- B. Easy Does It ----
//Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
    "Life is like a box of chocolates",
    "You can't separate peace from freedom because no one can be at peace unless he has his freedom ",
    "Education is the passport to the future"
]

//---- C. Accessing elements ----
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
randomThings = [1, 10, "Hello", true]
// you access the 1st element by calling it 0 due to the order
console.log(randomThings[0])
randomThings[2] = "World"
console.log(randomThings)

//  ----- D. Change values -----
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
 ourClass[2]
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.unshift("Cloud City");
console.log(ourClass)

// ---- E. Mix It Up ----
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "bob")
console.log(myArray)
// Remove the 5from the beginning of the array.
myArray.shift()
console.log(myArray)
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray)
// Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray)
// mutate means to change the origianl data structure so yes reversing it is mutatuing it. yes it returned the array reversed

// ---- F. Biggie Smalls ----
//Create a variable that contains an integer.
let r = 9
//Write an if ... elsestatement that:

//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.
if (r<100){
    console.log("little number")
}else {
    console.log("big number")
}

//---- G. Monkey in the Middle
//Write an if ... else if ... elsestatement:

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".

let s = 6
if (s < 5 ){
    console.log("little number");
}else if (s > 10){
    console.log("big number");
}else{
    console.log("monkey")
}

// ---- H. What's in your closet? ----
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
 console.log(`Kristyn is rocking that ${kristynsCloset[2]}`)
//   Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, "raybans");
console.log(kristynsCloset)
//   Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)
//   Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let tShirt = thomsCloset [0] [0]
console.log(tShirt)
//   In the same way, access one item from Thom's pants array.
let tPants = thomsCloset [1] [1]
console.log (tPants)
//   Access one item from Thom's accessories array.
let tAcc = thomsCloset [2] [0]
console.log (tAcc)
//   Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in ${tShirt}, ${tPants} and ${tAcc}`);
//   Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset [1] [2] = "Footie Pajamas";
console.log(thomsCloset);

//---------- IV. Functions ----------
// ---- A. printGreeting ----
// ---- B. printCool ----
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
function printCool(name){
    console.log (`${name} is cool`);
}
printCool("Naomi");
// ---- C. calculateCube ----
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
function calculateCube(num){
    let b = num ** 3;
    console.log(b);
}
calculateCube(7);

// ---- D. isVowel ----
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel (letter){
    let vowels = "AEIOUaeiou"
    console.log(vowels.includes(letter));
}
isVowel("a")
isVowel("b")

// ---- E. getTwoLengths ----
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths (l1,l2){
    console.log(l1.length, l2.length)
}
getTwoLengths("goo", "jobs")
getTwoLengths("help", "nothing")

// ---- F. getMultipleLengths ----
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(mm){
    console.log (mm.map(str => str.length));
}
getMultipleLengths(["blah", "red","blue","flag"])

// ---- G. maxOfThree ----
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree (x1, x2, x3){
    if (x1 >= x2 && x1>= x3 ){
    console.log(x1)    
}else if (x2 >= x1 && x2 >= x3){
    console.log(x2)
}else {
    console.log(x3)
}
}
maxOfThree(45, 36,72)
maxOfThree(0, -3, -4)

// ---- H. printLongestWord ----
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord (w){
    let longestWord  = "";
    for (let word of w){
        if ( word.length > longestWord.length ){
            longestWord = w;
    }
}
console.log(longestWord)
}
printLongestWord(["red", "chain","train", "walmart"])

// ------------ V. Objects -------------
// ---- A. Make a user object ----
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = {
    name: "Naomi",
    email: "mimi@perscholas.com",
    age: 32,
    purchased: []
}
console.log(user)

// ---- B. Update the user ----
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.email = "new@email.org";

user.age++;

console.log (user)
// ---- C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "Ohio"
console.log(user)

// ---- D. Shopaholic! ----
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

// ---- E. Object-within-object ----
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name : "Rachel Rae",
    age: 37,
    location: "state",
    purchased: []
};
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55
console.log(user.friend.age)
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("the one ring")
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])

// ---- F. Loops ----
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i< user.purchased.length; i++){
    console.log(user.purchased[i])
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let t = 0; t< user.friend.purchased.length;t++){
    console.log(user.friend.purchased[t]);
}

// ---- G. Functions can operate on objects ----
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
    console.log(user)
}
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
    console.log(user)
}

oldAndLoud(user)

//---------------------------------------------------
//--------------- Cat Combinator -------------------
// ---- 1. Mama cat ----
// Define an object called cat1that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
let cat1 = {
    name: "fluffy",
    breed: "orange",
    age: 7000
};
console.log(cat1.age)
console.log(cat1.breed)

// ---- 2. Papa Cat ----
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
let cat2 = {
    name: "rocky",
    breed: "black",
    age: 2
}

// ---- 3. Combine Cats! ----
// Make it so the combineCatsfunction will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
function combineCats(cat1, cat2){
    return {
        name: cat1.name + cat2.name,
        age: 1,
        breed: cat1.breed + "-" + cat2.breed,
    }
}
console.log (combineCats(cat1,cat2))
let level2=(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)))
console.log(level2)

// console.log(combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2))),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)))
console.log(combineCats(level2,level2))