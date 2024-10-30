// let age = prompt('Enter your age :');

// if(age % 5 == 0){
//     console.log(age + ' is a Multiple of 5');
// } else {
//     console.log(age + ' is not a Multiple of 5');
// }


// Factorial of a number

// function factorial(n){
//     console.log("The number function that has triggered : " + n);
//     if(n === 0 || n === 1){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// let userNumber = prompt('Enter the number to get the factorial : ');
// let fact = factorial(userNumber);
// console.log(fact);


// Reverese a string

// function reverseString(str){
//     if(str != ''){
//         return str.split('').reverse(str).join('');
//     } else {
//         return 'String should not be empty!!!';
//     }
// }

// let userInput = prompt('Enter the string to reverse it : ');
// let reverseStringIs = reverseString(userInput);
// console.log(reverseStringIs);


// Palindrome of a string

// function reverseStringPalindrome(str){
//     if(str != ''){
//         return str.split('').reverse(str).join('');
//     } else {
//         return 'String should not be empty!!!';
//     }
// }

// let userInput = prompt('Enter the string to check Palindrome or not : ');
// let palindrome = reverseStringPalindrome(userInput);

// let reverseStringIs;

// if(userInput == palindrome) {
//     reverseStringIs = userInput + ' is Palindrome.'
// } else {
//     reverseStringIs = userInput + ' is not is Palindrome.'
// }
// console.log(reverseStringIs);



//fizzBuzz that prints numbers from 1 to n, but for multiples of 3, print “Fizz” instead, and for multiples of 5, print “Buzz” instead. For numbers that are multiples of both 3 and 5, print “FizzBuzz.”

// function checkFizzBuzz(num){
//     for(let i = 1; i <= num; i++){
//         if((i % 3 == 0) && (num % 5 == 0)){
//             console.log("The number "  + i + " is divisible of both 3 and 5. '-F-I-Z-Z-B-U-Z-Z-'");
//         } else if(i % 3 == 0){
//             console.log("The number "  + i + " is divisible of 3. '-F-I-Z-Z-'");
//         } else if(i % 5 == 0){
//             console.log("The number "  + i + " is divisible of 5. '-F-I-Z-Z-'");
//         } else {
//             console.log("The number "  + i + " not divisible by 3 or 5");
//         }
//     }
// }

// let userNumber = prompt('Enter the check the number to play fizzBuzz : ');
// checkFizzBuzz(userNumber);


// Get the name from the user and then create a new username using @ the symbol in front of their name and then at last add the length of the name.

// let username = prompt("Enter you're name: ");
// let length = username.length;
// //let output = '@' + username + length;
// let rate = '@';
// let output = rate.concat(username).concat(length);
// console.log(output);

//Some of string methods
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.charAt(0));
// console.log(username.indexOf('a'));
// console.log(username.replace('a','d'));
// console.log(username.replaceAll('a','d'));
// console.log(username.slice(5,6));
// console.log(username.trim());

// let arrayOfArrays = [
//     ['Samd', 25],
//     ['Alice', 30],
//     ['Bob', 22]
// ];

// let ofObjects = {
//     'Samd' : 25,
//     'Alice': 30,
//     'Bob': 22
// };

// // for arrays and strings
// for(let i  of arrayOfArrays){
//     console.log(i);
// }

// //for objects
// for(let key  in ofObjects){
//     console.log(key + " value is :" + ofObjects[key]);
// }


// Strings template literals

// let dob = '2001';
// console.log(`Abdul samad was born in ${dob}`);
// console.log(`Abdul samad was born in ${1 + 10 + 20}`); // Also know as string interpolination


// For a given array of marks of students [88, 90, 59, 66, 73] calcualte the average

// let marks = [88, 90, 99, 90, 90];
// let totalStudents = marks.length;
// let totalmarks = 0;
// for (let mark of marks){
//     totalmarks += mark;
// }
// let totalAverage = totalmarks/totalStudents;
// console.log(`The average marks of the students: ${totalAverage}`)


// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let prices = [250, 645, 300, 900, 50];
// console.log(`Price before applying offer : ${prices}`);
// let offer = 10;
// let offerPrice = 0;
// for (let i = 0; i < prices.length; i++){
//     offerPrice = prices[i] - prices[i] / offer;
//     prices[i] = offerPrice
// }

// console.log(`Price after applying offer : ${prices}`);


// Array Methods

// let marks = [88, 90, 99, 90, 90];
// console.log(marks);

// pop method which deletes last element
// let deletedValue = marks.pop();

// console.log(deletedValue);
// console.log(marks);


// // push method which add new element in last
// marks.push(78);
// console.log(marks);

// console.log(marks.toString()); // converts to string

// let marks2 = [96, 85];
// let marks3 = [76, 99];

// console.log(marks.concat(marks2, marks3)); // add two or more arrays 'concat'

// console.log(marks.shift());  // delets the first value of array in orginal array
// console.log(marks.unshift(25)); // adds value to the first index of orginal array

// console.log(marks.slice(2,3));
// console.log(marks.splice(2,0,95 ,66)); // splice can add, delete and replace the values in the defined position. => syntax for splice method is splice(startIndex,deletValues,NewValuestoBeAdded)


// Create an array of companies "Bloomberg", "old", "Uber", "Google", "OpenAI"

// let companies = ["Bloomberg", "ola", "Uber", "Google", "OpenAI"];

// console.log(`Removing the first company ${companies.shift()}. After removing the first company, Now there are only ${companies}`);
// console.log(`Removing the Ola and Uber companies ${companies.splice(0,2)}. After removing the ola and Uber companies, Now there are only ${companies}`);
// console.log(`Adding amazon at the end ${companies.push('Amazon')}. After add Amazon, Now there are only ${companies}`);


// Arrow Functions In JS --> It is used for small logic functions

// const sumFun = (a, b)=>{
//     return a + b;
// };


// create a function that returns total vowels in given string

// function findVowels(str){
   
//     let find;
//     let totalVowels = 0;
//     for (let string of str){
//        if(string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u'){
//             totalVowels++;
//        }
//     }
//     console.log(totalVowels);
// }

// findVowels("dfrgh");


// ForEach Methods in Arrays -> These are also called the HOF / HOM (Higher Order Functions / Higher Order Methods)

// let myArray = [1, 2, 3, 4, 5];

//Method 1 ->calls a function as a parameter
// myArray.forEach(getVal);

// function getVal(val){
//     console.log(val);
// }

//Method 2 directly writes the function

// myArray.forEach(function getVal(val){
//     console.log(val);
// })
    
//Method 3 arrow function

// myArray.forEach( (val, id, array) => {
//     console.log(val + ' ' + id  + ' '  + array );
// })


// print the squar of the array

// let numbers =  [1, 2, 3, 4, 5];
// let squareNumber;
// numbers.forEach( (val) => {
//     squareNumber = val * val;
//     console.log(squareNumber);
// });


// copy only first 2 characters of array and store the val in new var

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
// let str;
// let newDays = [];
// days.forEach((val) => {
//     str = val.slice(0,2) + ' ';
//     newDays.push(str);
// });

// console.log(newDays);


// turn the number strings into float and add those in the total varaible

// let pirces = ['20.5', '85.6', '156.20'];
// let floatPrice;
// let total = 0;
// pirces.forEach( (val) => {
//     console.log(typeof(val));
//     floatPrice = parseFloat(val);
//     console.log('After ' + typeof(floatPrice));
//     total += floatPrice;
// });

// console.log(total.toFixed(2));


// Some More Array Methods
// map, filter, reduce

// Filter out the students marks that scored 90+

// let marks = [89,90,95, 89, 97, 88];

// const toppers = marks.filter( (val) => {
//    return val > 90;
// });

// console.log(toppers);

// Get the Number from the user and generate the array from 1 to n
// use reduce method to sum all the value of all the values in array
// use reduce method to product all the value of all the values in array

// let number = prompt("Please enter the number to sum and product starting from 1: ");

// let numArray = [];
// for (let i = 1; i <= number; i++){
//     numArray.push(i);
// }
// console.log(numArray);
// // For sum
// // let sumOfArray = numArray.reduce(
// //     (res, val) => {
// //         console.log(val);
// //         res += val;
// //         return res;
// //     }
    
// // );
// // console.log(sumOfArray);

// // For product
// let prodOfArray = numArray.reduce(
//     (res, val) => {
//         console.log(val);
//         res *= val;
//         return res;
//     }
// );
// console.log(prodOfArray);


// DOM
// document.getElementsByClassName("className");
// document.getElementsByTagName("tagName");
// document.getElementById("id");
// document.querySelector("p");  // Used to access only the firstElment, This can be used for all (tags, classes, Ids)
// document.querySelectorAll("h1"); // Used to access all the elements, This can be used only for tags and classNames as id will be unique right

// console.log(document.body);
// console.dir(document.body);

// let h1 = document.getElementsByTagName("h1");
// console.log(h1.innerText); // you will get undefined
// console.log(h1[0].innerText); // Accessing the first <h1>

// let h1New = document.querySelector("h1");
// console.log(h1New.innerText);

// let first = document.querySelectorAll("h1");
// console.log(first);

//to get the attribute
// let div = document.querySelector("div");
// div.innerText = 'Happy';
// // console.log(div.getAttribute("class"));

// //to get the style and set the style

// div.style.backgroundColor = 'red';
// div.style.fontSize = '20px';
// console.log(div.style);



//insert and delete elements 
// Methods used, append, prepend, before and after

// let div = document.querySelector("div");
// let newPara = document.createElement("p");

// div.append(newPara); // at last of the Element
// newPara.innerText= "Happy First!!!";

// div.prepend(newPara); // first place of the Element
// newPara.innerText= "Happy First!!!";

// div.before(newPara);
// newPara.innerText= "Happy First!!!";

// div.after(newPara);
// newPara.innerText= "Happy First!!!";


// Q: Create a button in js and name it as Click Me! with the background red and  text color white, Then insert the button as the first element inside the body tag

// let body = document.querySelector("body");

// let newBtn = document.createElement("button");

// body.prepend(newBtn);
// newBtn.innerText = 'Click Me!';
// newBtn.style.backgroundColor = 'red';
// newBtn.style.color = 'white';
// newBtn.style.fontSize = '20px';
// newBtn.style.padding = '7px';
// newBtn.style.borderRadius = '10px';

// Q: Create a P tag element in html and give it a classname and styling
    // Now create a new class in CSS and try to append this class to the {p} element
    // Did you notice, how you overwrite the class name when you add a new one ?
    // Solve the problem using classList