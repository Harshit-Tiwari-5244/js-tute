//VARIABLES IN JS:

// let str = "";
// for(i=0; i<=5; i++){
//     str += "Harshit";
// }
// console.log(str);

// setInterval(function() {
//     let currentDateTime = new Date();

//     let day = currentDateTime.getDate();
//     let month = currentDateTime.getUTCMonth() + 1;
//     let year = currentDateTime.getFullYear();
//     let hour = currentDateTime.getHours();
//     let minute = currentDateTime.getMinutes();
//     let second = currentDateTime.getSeconds();
    
//     let clock =document.getElementById("clock");
//     clock.innerHTML = `${hour}:${minute}:${second} ${day}/${month}/${year}`;
// },1000)

// const today = new Date();
// //console.log(today);
// let dayName = today.toLocaleString("default",{weekday:"long"});
// console.log(dayName);


// short hand of to print repeat---
// let str = "hellow".repeat(5);
// console.log(str,typeof str);

// console.log("H".repeat(100));


// let arr1 = [10,20,30,40,50,60,70,80,90];
// let arr2 = ['a','b','c','d'];
// let arr3 = [1,2,3,4,5,56,7,8,9];
// let newArr = arr1.concat(arr2);
// console.log(newArr, typeof newArr);

// {let x = "Harshit";
// let y = "Tiwari";
// console.log(x,y); //x=Harshit y=Tiwari

// const temp = x;
// x = y;
// y = temp;
// console.log(x,y);}  // x=Tiwari y=Harshit

// //short hand of abov ex--
// let x = "Harshit";
// let y = "Tiwari";
// [x,y] = [y,x]
// console.log([x,y], typeof [x,y]);

// function sum(){
//     a =10 ;
//     b=90;

//     return a + b
// }

// const value = sum();
// console.log(value);

// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// let factoeial = factorial(5);
// console.log(factoeial);


// let a = 10;
// console.log(a);







/*var a = 2;
console.log(a);
var a = 3;
console.log(a);*/

/*const a = 2;
console.log(a); // 2
a = 3;
console.log(a);  //over ride: print 3*/

// const myname = "Harshit";
//  myname = "Aman";
// console.log(myname);

// const a = 4;
// b = 3;
// sum = a+b;
// console.log(sum);

// const a = 2;
// b = ++a;
// console.log(b);

// let a = 2;
// b = a-1;
// console.log(b);

// let Name = "Aman"
// console.log(Name);

// Cannot redeclare block-scoped variable 'a'.
// let a = 3;
// let a = 4;
// console.log(a);

// var a = 4;
// var a = 8;
// console.log(a); //output==8

// firstName = "Harshit";
// console.log(firstName);
// //after change the value:
// firstName = "Aman";
// console.log(firstName); // output is: Aman

// var firstName = "Harshit";
// console.log(firstName);
// //after change the value:
// firstName = "Aman";
// console.log(firstName);

// name = "aman";
// age = 24;
// console.log(name);
// console.log(age);

// x = null;
// console.log(x);  

// const a = [4];
// const b = [4];
// if(a===b){      // here it compare strictly refernces of both a and b i.e. different
//   console.log("both are same");
// }else
// console.log("both are not same");

// const c = [4];
// const d = [4];
// if(JSON.stringify(a)===JSON.stringify(b)){      // here it compare strictly contents  of both a and b i.e. same : 4
//   console.log("both are same");
// }else
// console.log("both are not same");


// OBJECTS IN JS

// let array = ['harshit', 'jdhar@gmail.com'];
// console.log(array[0], array[1]);  

// let object = {
//     name: "aman",
//     class: "nursary",
//     subject: "gola"
// };
// console.log("object =",object);
// /*to access any key value here is two types
//  . and [] */
// // .
// console.log("dotmethod :",object.name);
// console.log("dotmethod :",object.class);
// console.log("dotmethod :",object.subject);
// // []
// console.log("squrebracketmethod :",object['name']);
// console.log("squrebracketmethod :",object['class']);
// console.log("squrebracketmethod :",object['subject']);
// console.log(object, typeof object); 





// OPERATOR IN JS:

/*let a = 5;
let b = 2;
let c = a % b;
d = a / b;
e = a * b;
f = a - b;
g = a + b;
console.log("a = ",a, "& b = ", b);
console.log("mod =",c, "division =",d, "multiply =",e, "subs =",f, "sum =",g);*/

/*a = 2;
b = 2**10;
console.log(b);*/

//unary operators--
/*let a = 2;
a++;  //a+1;
console.log(a);*/

/*let a= 10; b = 12;
console.log("a =",a, "& b =",b);
a++;  //++a;
console.log("a =", a);

b++;     //++b;
console.log("b = ",b);*/

/*let a= 10; b = 12;
console.log("a =",a, "& b =",b);
// a--; b--; //post decrement.
// console.log("a =",a, "& b =",b);
--a; --b;  //pre decrement.
console.log("a =",a, "& b =",b);*/


/*post increment:
a = 1;
console.log("a++ =",a++); //phle purani value use hogi next line me change hogi value.
console.log("a++ =",a);*/

/*//pre decrement:
a = 1;
console.log("++a =",++a);*/ //phle mai value change krunga fir print karunga.


//Assignment Operators:

/* a = 2;
console.log("a = ",a);*/

/*a = 2;
a += 5;  // a=a+5
console.log("a= ",a); //2+5=7.*/

/*a = 5;
a -= 4;  // a-4
console.log("a = ",a); // 5-4=1 */

// a = 5;
// a *= 4;  // a*4
//console.log("a = ",a);  // 5*4=20.

// a = 10;
// a /= 5;  // a/5.
// console.log("a = ",a); // 10/5=2.

// a = 27;
// a %= 5;  // a%4
// console.log("a = ",a); // 27%5=2.

/*a = 2;
console.log("a =",a);
a **= 10;  // a**10
console.log("a = ",a);  //2**10=1024 */




//COMPARISON OPERATORS:to compare two values.

/* a = 3;
 b = 4;
 console.log("3==4",a==b); // false 
 b = 3;
 console.log("3==3",a==b); // true */

/* a = 3;
 b = 3;
 console.log("3!=3",a!=b); // false
 b = 4;
//  console.log("3!=4",a!=b);  //true */

/*a = 3;
b = "3";
console.log("a!=b", a!=b); // false, because a is number n b is a string.
console.log("a===b", a===b); // false, because a is number n b is a string. it is strict verson.
console.log("a==b", a==b); // true, inthis only check values not type. 
 it first change the value present in the string and then change it into the number and then compare.  */

//a = 2;
//  console.log(a++);
//  console.log(a++);
//  console.log(a++);
//console.log(a++ - ++a) 

/* let apples = "3";
let oranges = "4";
console.log(apples++);
console.log(apples);
console.log(oranges++);
console.log(oranges);
console.log(apples + -oranges);
console.log(-apples + oranges);
console.log(-apples + -oranges);
console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges)); */


// -------------------------------------------------------------------------------------------------------

// ----Conditional branching:-----






// upper to lower:
/*let str = "AMAN";
let new_str = "";
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(i=0; i<=str.length-1; i++){
    let char = str[i];
    for(j=0; j<=upper.length-1; j++)   
    if(char===upper[j]) {
        new_str = new_str + lower[j];
    }

}
console.log(new_str);*/

// lower to upper:
/*let word = "harshit"
let new_word = "";
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (i = 0; i <= word.length - 1; i++) {
    let char = word[i];
    for (j = 0; j <= lower.length - 1; j++)
        if (char === lower[j]) {
            new_word = new_word + upper[j];
        }


}
console.log(new_word);*/


// to print solid cone----
// function solidConeStarPattern(height) {
//     let pattern = '';
//     for (let i = 1; i <= height; i++) {
//         // Adding leading spaces
//         for (let j = height - i; j > 0; j--) {
//             pattern += ' ';
//         }
//         // Adding stars
//         for (let k = 1; k <= i * 2 - 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }
//     return pattern;
// }

// // Example usage:
// const height = 5;
// console.log(solidConeStarPattern(height));

// method two----
// function solidConeStarPattern(height, printFunction) {
//     let pattern = '';

//     for (let i = 1; i <= height; i++) {
//         // Adding leading spaces
//         for (let j = height - i; j > 0; j--) {
//             pattern += ' ';
//         }
//         // Adding stars
//         for (let k = 1; k <= i * 2 - 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }

//     printFunction(pattern);
// }

// // Function to print the pattern
// function printPattern(pattern) {
//     console.log(pattern);
//     //document.write(pattern);
// }

// // Example usage:
// const height = 10;
// solidConeStarPattern(height, printPattern);

// to print hollow ractangle
// let height = 9;
// for(i=1; i<=height; i++){
//     for(j=1; j<=((2*height)-1); j++){
//        if(i==1 || i==9 || j==1 || j==((2*height)-1)){
//         document.write(" *&nbsp;&nbsp;");
//        }else {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     }
//     document.write("<br>");
// }

// right angle triangle
// let height = 9;
// for(i=1; i<=height; i++){
//     for(j=1; j<=i; j++){
//        if(i==1 || i==9 || j==1 || j==i){
//         document.write(" *&nbsp;&nbsp;");
//        }else {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     }
//     document.write("<br>");
//}



//pattern 1
// for(let row=0; row<=5; row++){
//     document.write("*&nbsp;");
// }


// pattern 2
//for loop --- to print "*" pattern
// for(let row=0; row<3; row++){
//     for(let col=0; col<3; col++){
//         document.write("*&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

//pattern 3
//to print right angle "*" shape
// for(let row=1; row<=3; row++){
//     for(let col=1; col<=row; col++){
//         document.write("*&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }
// for(let row=3; row>=1; row--){
//     for(let col=1; col<=row; col++){
//         document.write("*&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

//pattern 4

// for (let i = 1; i <= 5; i++) {
//     document.write(" ".repeat(5 - i) + "*".repeat(i));
//   }


//pattern 5
// for (let i = 1; i <= 5; i++) {
//     document.write(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
//   }

//pattern 6
// const height = 5;
// for (let i = 1; i <= height; i++) {
//     document.write(" ".repeat(height - i) + "*".repeat(2 * i - 1));
//     document.write("<br>");
//   }

// let rows = 5;
// let pattern = "";
// for(let n=1; n<=rows; n++){
//     for(let m=1; m<=n; m++){
//         pattern += m;
//     }
//     pattern += "<br>";
// }
// document.write(pattern);



// Write a program to sort an array without using sort function.
// let arr = [20, 12, 34, 23, 34, 56, 0, 10, 11];
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
//document.write("Sorted Array is:", arr);


//write a program to reverse an array without using reverse function.
// let arr = [100, 200, 300, 400, 500];
// let len = arr.length;
// for (let i = 0; i < len / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[len - 1 - i];
//   arr[len - 1 - i] = temp;
// }
// document.write("reversed array is: ", arr);

// write a program to reverse a number.
// let num = 4239;
// let reverseNum = 0;
// while (num > 0) {
//   let remainder = num % 10;
//   reverseNum = reverseNum * 10 + remainder;
//   num = parseInt(num / 10);
// }
// document.write("reverse number is:", reverseNum);


// write a program to get the minimum value in an array without using min function
// let arr = [20, 10, 23, 24, 0, 2, 34, 56, 30 ];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// document.write("min value is:", min);


// write a program to get the maximum value in an array without using min function
// let arr = [20, 10, 23, 24, 0, 2, 34, 56, 30];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// document.write("max value is:", max);

//write a program to get the second minimum value in an array.
// let arr = [20, 10, 23, 24, 0, 2, 34, 56, 30];
// let max = arr[0];
// let secondMin = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < max) {
//     secondMin = max;
//     max = arr[i];
//   } else if (arr[i] > secondMin) {
//     secondMin = arr[i];
//   }
// }
// document.write("second min value is:", secondMin);

// write a program to get the second maximum value in an array
// let arr = [20, 10, 23, 24, 0, 2, 34, 56, 30];
// let max = arr[0];
// let secondMax = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax) {
//     secondMax = arr[i];
//   }
// }
// document.write("second max value is:", secondMax);


//write a program to check number is armstrong or not.
// let num = 153;
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//   let remainder = temp % 10;

//   sum += remainder * remainder * remainder;
//   temp = parseInt(temp / 10); 
// }
// if (sum == num) {
//  document.write(`${num} is an Armstrong number`);
// } else {
//     document.write(`${num} is not an Armstrong number.`);
// }


//write a program to check number is palindrome or not.
// let num = 1551;
// let temp = num;
// let rev = 0;
// while (num > 0) {
//   let rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.floor(num / 10);
// }
// if (temp == rev) {
//     document.write("Number is palindrome.");
// } else {
//     document.write("Number is not palindrome.");
//}


//write a program to check the number is perfect square number or not.
// let num = 64;
// let sqrt = Math.sqrt(num);
// if (sqrt * sqrt == num) {
//     document.write(`${num} is a perfect square number`);
// } else {
//     document.write(`${num} is not a perfect square number`);
// }


//writa a program to add the value in an array without using pop function.
// let arr = [20, 34, 35, 27, 10, 27, 36];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// document.write("sum of array is:", sum);


//write a program to delete a value from array with using buildin function.
// let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
// arr.splice(0, 2);
// document.write(arr);

// for(let row=1; row<=5; row++){
//      for(col=1; col<=5; col++){
//         document.write("*&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// for(let i=1; i<=5; i++){
//     for(j=1; j<=i; j++){
//         for(a=1; a<=i; a++){
//             document.write("&nbsp;*&nbsp;");
//         }
//         document.write("<br>");

//     }

// }




//---------------------------------------------------------------------------------------------------

//-----FUNCTION-------  (DUCAT)

// function multiplication(){
//     let a = 2;
//     let b = 6;
//     console.log("product:",a*b);
// }
// multiplication();

// function multiplication(num1,num2){
//     let product = num1 * num2;
//     console.log(product);
// }
// multiplication(8,2);
// multiplication(2,4);
// multiplication(5,7);
// multiplication(6,2);
// multiplication(2,5);
// multiplication(2,10);
// multiplication(5,9);
// multiplication(3,9);

// function table(){
//     for(i=1; i<=10; i++){
//         console.log(5*i);
//     }
// }
// table();

// function table(num){
//     for(i=1; i<=10; i++){
//         document.write(num*i);
//         document.write("<br>");
//     }
// }
// table(1);
// table(2);
// table(3);
// table(4);
// table(5);
// table(6);
// table(7);
// table(8);
// table(9);
// table(10);
// table(11);
// table(12);
// table(13);
// table(14);
// table(15);
// table(16);
// table(17);
// table(18);
// table(19);
// table(20);

// computed properties---
// let firstName = "Navaneet";
// let object = {
//  [ firstName] : "Aman"
// }
// console.log(object);

// property value shorthand----
// let names = "Navaneet";
// let objects = {
//     firstName : names
// }
// console.log(objects);

// ----in above case if key and its value is same then--
// let names = "Aman";
// let object = {
//      names //firstName : names   // same like that "names : names"
// }
// console.log(object);

// Aman Devesh harekrishn jamuna prasad sharma

// property name limitations ---
// let object = {
//     firstName : "firstName",
//     $firstName : "$firstName",
//     _firstName : "_firstName",
//     "first Name" : "first  Name",
//      //1firstName : "1firstName",
//      let : "let",
//      const : "const",
//      var : "var",
//      if : "if",
//      else : "else",
//      while : "while",
//      dowhile : "dowhile",
//      for : "for",
//      For : "for",
//      Harshit : "aman",
//      key : "navaneet"
// }
// console.log(object);
// // to access the key values use for-in loop:-
// for(const key in object){
//      console.log(key,object[key]);  // it access key-values pairs
//      //console.log(key,object.key);
//     //console.log(key);  // it acces only keys not values
// }

// generate random 6 digit number  
// function generateSixDigitNumber() {
//     console.log(Math.floor(Math.random() * 900000) + 100000);
// }
// generateSixDigitNumber();

// let num = 1000;
// console.log(math.random(num));

//  quotes
// let str1 = "Aman";
// let str2 = 'Aman';
// let str3 = `Aman`;
// console.log(str1, str2, str3);

// let string1 = "Harshit";
// console.log(string1);
// let string2 = 'Harshit2';
// console.log(string2);
// let string3 = `Harshit3`;
// console.log(string3);

// let fname = "Aman";
// let lname = "Sharma";
// let fullName = fname + " " + lname;
// console.log(fullName); 
// let FullName = `${fname} ${lname}`;  // here no need to use + sign.
// console.log(FullName);

// let firstName = "Aman";
// let middleName = "Kumar";
// let lastName = "Sharma";
// let fullName = firstName + " " + middleName + " " + lastName;
// console.log("fullName :",fullName);
// let fulName = `${firstName} ${middleName} ${lastName}`;
// console.log(fulName);


// special characters---   to make comma the part of string use "\" then after it comma
// let str1 = "Harshit\"s";
// let str2 = 'Aman\'s';
// let str3 = `Aman\`s`;
// let concat = `${str1}, ${str2}, ${str3}`;
// console.log(str1, str2, str3);
// console.log(concat);

// let str4 = "Harshit\"Aman";
// console.log(str4);


// string length
//  let str = "AmanKumar";
//  console.log("str",str);
//  console.log(str.length);

// let Name = "Aman Kumar Sharma";
// console.log(Name,Name.length); // Aman Kumar Sharma 17


// Accessing characters
// let str = "AmanKumarSharma";
// console.log("str :",str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);
// console.log(str[8]);
// console.log(str[9]);
// console.log(str[10]);
// console.log(str[11]);
// console.log(str[12]);
// console.log(str[13]);
// console.log(str[14]);
// console.log(str[0],str[1],str[2],str[3],str[4],str[5],str[6],str[7],str[8],str[9],str[10],str[11],str[12],str[13],str[14]);

// let array1 = str[0];
// let array2 = str[1];
// let array3 = str[2];
// let array4 = str[3];
// let array5 = str[4];
// let array6 = str[5];
// let array7 = str[6];
// let array8 = str[7];
// let array9 = str[8];
// let array10 = str[9];
// let array11 = str[10];
// let array12 = str[11];
// let array13= str[12];
// let array14= str[13];
// let array15= str[14];
// let concat = `${array1}${array2}${array3}${array4}${array5}${array6}${array7}${array8}${array9}${array10}${array11}${array12}${array13}${array14}${array15}`;
// console.log("concat :",concat);

//strings are immutable
// let str = "Aman";
// str = "AmanKumar"; // mutable
// console.log(str);
// str[0] = "a"; // immutable
// console.log(str);

// change into upper case
// let str = "aman kumar";
// console.log(str.toUpperCase());

// let Name = "harsit kumar tiwari";
// console.log(Name.toUpperCase());


// into lower case
// let string = "AMAN KUMAR";
// console.log(string.toLowerCase());

// task-1 into capitalize form
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   console.log("Capitalized: " + capitalize("harshit"));

// 2nd method
//   let str="aman sharma";
//   let new_str= "";

//   for(i=0;i<=str.length-1;i++){
//      if(i==0|| str[i-1] === " "){
//         new_str += String.fromCharCode(str.charCodeAt(i) - 32);
//      }else{
//         new_str = new_str + str[i];
//      }
//   }
//   console.log(new_str);

//---indexOf()---
// let string = "Aman Kumar Sharma";
// console.log(string.indexOf('A')); //0
// console.log(string.indexOf('w')); // -1
// console.log(string.indexOf('Ama')); // 0
// console.log(string.indexOf('man')); // 1
// console.log(string.indexOf('mar')); // 7
// console.log(string.indexOf('n')); // 3
// console.log(string.indexOf('uar'));  // -1

// custom function of indexOf()
// let string1 = "aman kumar sharma";
// let val = "u";
// for(i=0; i<string1.length; i++){
//    if(string1[i]===val){
//     indexval = i;
//     break;
//    }else{
//     indexval = -1;
//    }
// }
// console.log(indexval);

// let string1 = "aman kumar sharma";
// let val = "uma";
// for(i=0; i<string1.length; i++){
//    if(string1[i]===val[0]){
//     indexval = val[0];
//     break;
//    }else{
//     indexval = -1;
//    }
// }
// console.log(indexval);

// let string = "aman kumar sharma";
// let valu = "uma"
// for(i=0; i<string.length; i++){    
//         for(j=0; j<valu.length; j++){
//             if(string[i]===valu[j]){
//                 indexvalu = i;
//                 break;
//             }else{
//                 indexvalu = -1;
//             }
//         }

// }
// console.log(indexvalu);

// let number = 1;
// for(number<=10;){
//     console.log(number);
//     number++;
// }


// task - 2 write a custom indexOf function
// let str = "harshit tiwari";
// let val = "w";
// function indexOf(str, val) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// } 
// console.log(IndexOf(str, val));

// write a custom function for lastIndexOf
// let str = "harshit tiwari";
// let val = "i";
// function lastIndexOf(str, val) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(lastIndexOf(str, val));

// write a custom function for includes
// let str = "harshit tiwari";
// let val = "a";
// function include(str, val) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === val) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(include(str, val));

// write the custom function for startWith()
// let str = "harshit tiwari";
// let char = "har";
// let startsWith = str.indexOf(char) === 0;
// console.log(startsWith); // true


// write the custom function for endsWith()
// let str = "harshit tiwari";
// let char = "r";

// let endsWith = str.lastIndexOf(char) === str.length - 1;

// console.log(endsWith);






// let num=10;
// console.log(num.toString(10));
// console.log(num.toString(16));
// console.log(num.toString(2));
// console.log(num.toString());
// console.log();


//Q1 create a custom function in push method
// let array = [10, 20, 30];
// let push = [100,200,300,400];
// let new_array = [];
// for (j = 0; j <= array.length - 1; j++) {
//   new_array = new_array + " " + array[j];
// }
// for (i = 0; i <= push.length - 1; i++) {
//     //new_array = new_array + " " + push[i];
//     new_array = `${new_array} ${push[i]}`
// }
// console.log(`Final Array we get is : ${new_array}`);

//Q2 create a custom function in pop method
// let array1 = [100, 200, 300, 400, 500];
// let new_array1 = [];
// for (i = 0; i <= array1.length - 2; i++) {
//   //new_array1 = new_array1 + " " + array1[i];
//   new_array1 = `${new_array1} ${array1[i]}`
// }
// console.log(new_array1);

//Q3 create a Unshift function:--
// let array2 = [3000, 4000, 5000];
// let unshift = [1000, 2000];

// function shifting(arr , elements){
//   let new_array2 = [];

//   for (i = 0; i <= elements.length - 1; i++) {
//   new_array2 = new_array2 + " " + unshift[i];
// }
// for (j = 0; j <= arr.length - 1; j++) {
//   //new_array2 = new_array2 + " " + array2[j];
//   new_array2 = `${new_array2} ${array2[j]}`;
// }

// console.log(`After unshifting :-- ${new_array2}`);
// }

// shifting(array2 , unshift);

//Q4 create a shift function :
// let array3 = [1, 2, 3, 4, 5];
// function shift(arr) {
//   let output = arr[0];
//   for (i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length--;
//   console.log(arr);
//   return output;
// }
// const data = shift(array3);
// console.log(data);


//Q5 create a splice method :--

// function customSplice(arr, start, deleteCount, ...items) {
//     // Step 1: Handle negative start value
//     if (start < 0) {
//       start = Math.max(arr.length + start, 0);
//     }

//     // Step 2: Handle deleteCount greater than length - start
//     deleteCount = Math.min(Math.max(deleteCount, 0), arr.length - start);

//     // Step 3: Remove deleted elements and store them in a new array
//     const deleted = [];
//     for (let i = 0; i < deleteCount; i++) {
//       deleted.push(arr[start + i]);
//     }

//     // Step 4: Shift remaining elements
//     const shiftCount = arr.length - start - deleteCount;
//     for (let i = 0; i < shiftCount; i++) {
//       arr[start + i] = arr[start + deleteCount + i];
//     }

//     // Step 5: Insert new items
//     const itemsCount = items.length;
//     const newLength = arr.length - deleteCount + itemsCount;
//     arr.length = newLength; // Adjust array length
//     for (let i = newLength - 1; i >= start + itemsCount; i--) {
//       arr[i] = arr[i - itemsCount];
//     }
//     for (let i = 0; i < itemsCount; i++) {
//       arr[start + i] = items[i];
//     }

//     // Step 6: Return the deleted elements
//     return deleted;
//   }

//   // Example usage:
//   const originalArray = [1, 2, 3, 4, 5];
//   const deletedElements = customSplice(originalArray, 2, 2, 7, 8, 9, 10);
//   console.log(deletedElements); // Output: [3, 4]
//   console.log(originalArray); // Output: [1, 2, 'a', 'b', 'c', 5]

//Q6 convert two dimensional array into one dimension
// let array4 = [10, [11, 12], 13, 14, [15, 16]];
// let new_array3 = [];

// for (let i = 0; i < array4.length; i++) {
//   if (Array.isArray(array4[i])) {
//     for (let j = 0; j < array4[i].length; j++) {
//       new_array3.push(array4[i][j]);
//     }
//   } else {
//     new_array3.push(array4[i]);
//   }
// }
// console.log(new_array3);

// function customInclude(array, value) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// var array = [10, 20, 30, 40, 50, 60];
// console.log(customInclude(array, 30)); 
// console.log(customInclude(array, 6)); 

// let ayyary1 = [10, 20, 30, 40, 50, 60];
// let value = 50;
// for(i=0; i<ayyary1.length; i++){
//     if(ayyary1[i]===value){
//         print = true;
//     }else{
//         print = false;
//     }
// }
// console.log(print);

// write the function to concat two arrays without concat function
// let arr1 = [10, 20, 5, 8, 15];
// let arr2 = [100, 80, 23, 11, 2];

// function mergeArray(arr1, arr2) {
//   let arr3 = [];

//   for (let i = 0; i < arr1.length; i++) {
//     arr3.push(arr1[i]);
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     arr3.push(arr2[j]);
//   }
//   return arr3;
// }

// console.log(mergeArray(arr1, arr2));

//write the custom function for arr.lastInexOf()
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 10];
// function lastIndexOf(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(lastIndexOf(arr1, 2));


//write the custom func for arr.find()
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function myFind(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log("Index of 50:", myFind(arr, 50));


//write the custom func for arr.findIndex()
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function myFindIndex(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log("findIndex of 50:", myFindIndex(arr, 50));


//write the custom function for arr.lastInexOf()
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 10];
// function lastIndexOf(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(lastIndexOf(arr1, 2));


//write the custom function for arr.includes()
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function myIncludes(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(myIncludes(arr1, 2));


//write the custom function for arr.slice()
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function sliceArr(arr, startIndex = 0, endIndex = arr.length) {
//   let newArr = [];
//   for (let i = startIndex; i < endIndex; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// console.log(sliceArr(arr, 0, 5));

//   slice  ----

// let arr = [10, 20, 30, 40, 50, 50, 60, 70];
// console.log(arr.slice(4,9));
// console.log(arr.slice(0,3));
// console.log(arr.slice(0));
// console.log(arr.slice(1));

// const a = 4;
// const b = 4;
// if(a===b){
//     console.log("true");
// }else{
//     console.log(false);

// let a = 10;
// let b = -19;
// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

//3, -7, 2
// let a = 3;
// let b = -7;
// let c = 2;
// let product = a*b*c;
// if(product>0){
//     console.log("positive");
// }else{
//     console.log("negative");
// }


// to print in decending order
// let a = 0;
// let b = -1;
// let c = 4;
// if(a>b && a>c){
//     if(b>c){
//         console.log(a + ", " + b + ", " + c);
//     }else{
//         console.log(a + ", " + c + ", " + b);
//     }
// }else if(b>a && b>c){
//     if(a>c){
//         console.log(b + ", " + a + ", " + c);
//     }else{
//         console.log(b + ", " + c + ", " + a);
//     }

// }else if(c>a && c>b){
//     if(a>b){
//         console.log(c + ", " + a + ", " + b);
//     }else{
//         console.log(c + ", " + b + ", " + a);
//     }
// }else{
//     console.log("done");
// }


// // find largest number in -5, -2, -6, 0, -1
// let a = [-5, -2, -6, 0, -1];
// if(a[0]>a[1] && a[0]>a[2] && a[0]>a[3] && a[0]>a[4]){
//     console.log("largest value is: ", a[0]);
// }else if(a[1]>a[0] && a[1]>a[2] && a[1]>a[3] && a[1]>a[4]){
//     console.log("largest value is: ", a[1]);
// }else if(a[2]>a[0] && a[2]>a[1] && a[2]>a[3] && a[2]>a[4]){
//     console.log("largest value is: ", a[2]);
// }else if(a[3]>a[0] && a[3]>a[1] && a[3]>a[2] && a[3]>a[4]){
//     console.log("largest value is: ", a[3]);
// }else if(a[4]>a[0] && a[4]>a[1] && a[4]>a[2] && a[4]>a[3]){
//     console.log("largest value is: ", a[4]);
// }else{
//     console.log("largest value is: ", "null");
// }

//Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and       displays a message on the screen.
// let n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// for(i=n[0]; i<=n[15]; i++){
//     if(n[i]%2===0){
//         console.log(n[i],"= even");
//     }else{
//         console.log(n[i],"= odd");
//     }
// }

// method---- 
// for(i=0; i<=15; i++){
//     if(i%2===0){
//         console.log(i + " = " + "even");
//     }else{
//         console.log(i + " = " + "odd");
//     }
// }

//Write a JavaScript program that computes the average marks of the students.Then, this average is used to determine the corresponding grade.
// Array of students with their names and grades

// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// var Avgmarks = 0;
// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }
// console.log("Average grade: " + (Avgmarks) / students.length);
// if (avg < 60) {
//     console.log("Grade: F");
// } else if (avg < 70) {
//     console.log("Grade: D");
// } else if (avg < 80) {
//     console.log("Grade: C");
// } else if (avg < 90) {
//     console.log("Grade: B");
// } else if (avg <= 100) {
//     console.log("Grade: A");
//}
// console.log(students.length);
// console.log(students[0][1]);

//  for(i=1; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i,"by 3&5: FizzBuzz");
//     }else if(i%3===0){
//         console.log(i,"by 3: fizz");
//     }else if(i%5===0){
//         console.log(i,"by 5: buzz");
//     }else{
//         console.log(i);
//     }
// }


// Loop through numbers from 1 to 100
// for (var i = 1; i <= 100; i++) {
//     // Check if the number is divisible by both 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz");
//     }
//     // Check if the number is divisible by 3
//     else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     }
//     // Check if the number is divisible by 5
//     else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     }
//     // If none of the above conditions are met, print the number
//     else {
//         console.log(i);
//     }
// } 





//-----------------------------APNA COLLEGE------------------------------------------------------------------

//   ---------------------dom manipulation---------------------------


// for(let i=0; i<3; i++){
//     setTimeout(() => console.log(i),1)
// }




//  function printNumbers(start){
//     if(start<=10){
//         console.log(start++);
//     }
//     printNumbers(start);
// }
// printNumbers(1);


// function apple(){
//     banana();
// }
// apple();

// function banana(){
//     apple();
// }
// banana();

// function myfunction(){
//     console.log("welcome to the world");
//     console.log("we are react developer");
// }
// myfunction();

// function myFunction(message){ // message--as input called parameter.
//     console.log(message);
// }
// myFunction("My good friend is aman."); // in paranthesis called argument.

// function sum(x,y){
//     console.log("sum =",x+y);
// }
// sum(10,10);  call in console

// function multiplication(n1){
//----does not need of this line.----
//     let table = []
//     for(let i=1; i<=10; i++){
//         console.log(n1*i);
//     }
// }
// multiplication(20);

// function multiplication(n1){
//     let table = []
//     for(let i=1; i<=10; i++){
//         table.push(n1*i);
//     }
//     return table.join(",");  // use as seperator by using ","
// }
// let val = multiplication(10);
// console.log(val);


// --------deepak sir---------------------------

// let promise = new Promise((resolve, reject) => {
//     resolve("Resolved State")
//     reject("Rejected State")
// })
// console.log(promise);

//  function func1(){
//     func2()
//     console.log("func1 called");

// }




// class Class1 {
//     classname = "Class";

//     getClassname = () => {
//         console.log(this.className);
//     }
// }

// class Class2 extends Class1{

// }

// const class2 = new Class2();
// console.log(class2);


//slice in array
//const arr = [10,20,30,40,50,60,70,80,90]; // length 9
//console.log(arr.slice(0));
//console.log(arr.slice(0,-1)); //(8) [10, 20, 30, 40, 50, 60, 70, 80]
//console.log(arr.slice(3));  //(6) [40, 50, 60, 70, 80, 90]
// console.log(arr.slice(-1,0)); //[]
// console.log(arr.slice(0,0)); //[]
// console.log(arr.slice(2,1)); //[]
// console.log(arr.slice(-1,-1)); //[]
//console.log(arr.slice(-1,-2)); //[]
// console.log(arr.slice(-2,-1)); // [80]
// console.log(arr.slice(7,8)); // [80]

//cocat in array--
// const arr = [10,20,30,40,50,60];
// const arr1 = [`a`,`s`,`d`,`f`,`g`,`h`,`j`];

// const ans = arr + arr1;
// console.log(ans, typeof ans);

// const answer = arr.concat(arr1);
// console.log(answer, typeof answer);


//-----------------------------instagram-----------------------------------------------------------------

// function greet(){
//     console.log(this);
// }
// greet();// output windows

// let person = {
//     firstName : "Harshit",
//     lastName : "Tiwari",
//     greet : function(){
//         console.log(this.firstName);
//     }
// }
// greet();




// const object = {
//     fullName : "harshit tiwari",
//     course : "B.Tech",
//     Branch : "CSE",
//     roll_no : 2005988,
//     mobile_no : 8896423393,
//     email : "harshit@gmail.com",
//     father : "Awadhesh Tiwari",
//     mother : "Usha Tiwari"
// }
// const output = JSON.stringify(object);
// console.log(output, typeof output);
// console.table(object);


// array of object
// const list = [
//     {Name:"Aman Sharma",Course:"B.Tech",Branch:"CSE",Roll_no:2005960,},
//     {Name:"Harshit Tiwari",Course:"B.Tech",Branch:"CSE",Roll_no:2005988},
//     {Name:"Naman Sinha",Course:"B.Tech",Branch:"CSE",Roll_no:2005890},
//     {Name:"navaneet",Course:"Diploma",Branch:"Electrical",Roll_no:36789986},
// ]
// console.table(list);

// const arr = [12, 13, 45, 36, 26, 36, 57];
// console.table(arr);

// arrow function---
// function sayHello(){
//     console.log("hello aman");
// }
// sayHello();

// sayHello = () => {console.log("hello aman")};
// sayHello();

// const table = () => {
//     for(i=1; i<=10; i++){
//         console.log(5*i);
//     }
// }
// table();


// const table6 = (x) => {
//     for(i=1; i<=10; i++){
//         console.log(x*i);
//     }
// }
// table6(6);

// const table5 = (x) => {
//     for(i=1; i<=10; i++){
//         console.log(x*i);
//     }
// }
// table5(5);


// factoeial--
// const number = 5;
// const newNum = 1;
// for(i=number; i>=1; i--){
//     newNum = newNum*i;
// }
// console.log(newNum);

// factorial = (num) => {
//     const newval = 1;
//     for(i=num; i>=1; i--){
//         newval *= i;
//     }
//     console.log(newval);
// }
// factorial(20);

// function factorial(num) {
//     if (num < 0) {
//         result = NaN;
//     } else if (num === 0) {
//         result = 1;
//     } else {
//         const result = 1;
//         for (i = num; i >= 1; i--) {
//             result *= i;
//         }
//         console.log(result);
//     }

// }
// factorial(6);

// console.log(null==0);

// var a = 1;
// function b(){
//     a = 10;
//     return;
//     function a(){}
// }
// b();
//console.log(a);

//------------------------15-aug-24----------------

// let arr = new Array(1,2,3);
// console.log(arr, typeof arr);

// traverse an arraay of elements
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     console.log(element);
    
// }




// traverse an arraay of elements in reverse order
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[arr.length - 1 - i] >= 0) {
//         let newarr = arr[arr.length - 1 - i];
//         console.log(newarr);
//     }
    
// }




































































