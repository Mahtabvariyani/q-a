# The 30 Most frequesntly asked Questons in JavaScript Interviews

| No. | Questions || --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |

> 1

# What is JavaScript and wha makes it diffrent than Java...?

|Answer:|
the JavaSCript is a scripting language and its used for making dynamic webpages but java is a language to make stand alone applications

> 2

# What are the Data TYpes in JAvaScript??

|Answer|
in Java Script we have 2 main data types Primitive and none primitive data types which the primitive data types (Which also known as immutable) are String , Numbers ,boolean null , undefined

and the none Primitive which known as muteable are Arrray , Object , Functions (THe function itself is an Object)


>3
# Hoisting in JavaScript

|Answer|


>4
# Diffrence between the let and Var and Const i JavaScript


they both are used for the declation of Variables but the let is block Scoped but the var is function scoped and you can reach it where ever you are in the whole function but the let is only accessable when you are in the blocked where it was declared

>5
# What is Closure?

|Answer|
Closure is a nexted function which the child function has access to the parent fucntions from the child function and its more used for Privecy In JavaScript 

>6 
# WHats An Event Loop in Ja aScript??

|Answer|
event Loop is that executes the code in none blocking way like asyncrnously it lets the brower executes the code and wait for the event to get executed like button click or request to network 


>7
# What is Calback Function?
|Answer|
is a function which has beeen passed  as an Argument an dit will be executed after the parent fucntion has been executed  this is also for none blocking execution of code 
Like setTimeOut()


>8
# WHats th eDiffrence between === and == ?
|ANswer|
The == is checking only the value and === is checkig for the value and the type



>9 
# Objects in JavaScript

is a collection of Key and Values .... and everything in javaScript or it can behave like an Object ... JavaScript is a proto type language  which means that can inherit properties and methods from another object only the primitive data types are not Object in JavaSCript


>10
# ProtoType in JavaScript
|answer|
its a way that JavaScript object inherit the Object Features from one another ...


>11 
# WHat is the Asyncrnious Fucntion 
|Answer|

the async before a function that means it always return something at the end or it will be rejected 

like this example 

const p = new Promise((res, rej) => {
  res(1);
});


>12 
# what is Promise
|Answer|

the Promise is an Object which is the answer to the asyncrns function which either will be full filled and showed with .then or it will be rejected with .catch



>13
# null and Undefined
|ANswer|
undefined mean the variable has been declared but never asigend a value to it and null is used to set a variable to have no values so that means the  null is a value but undefined is not 


>14
# Module In JavaScript
|Answer|

is a way to orgonise and reuse the code  by encapsulating in to a single unit so it can be exported or imoorted and reused in other places or simply saying to othe files to its useable there

it has 2 diffrent of export (Default export and named export)



as Name = 
export const name = "Jesse";
export const age = 40;

As default= 

export default message;


>15
# Spread Opration In JavaScript 
|Answer|
it allows us to quickly copy and paste the all part of the array or object into another array or object


>16
# THe Map function in JavaScript
|Answer|
map fucntion is a high order function  and used to transform anarray to a new array from calling a function for every element of the array 

numbers.map((number)=> (
    number +2
))


Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()
Array.prototype.forEach()
EventTarget.addEventListener()

>17
# Filter function 

it is used to filter an array based on a acertain condition and it returns a new array based on the conditions which is writen 



>18
 # REduce function
|Answer|
it is used to reduce an array to  a single w value  by applying the written condition toeach element of the array




>19
# generator function in JavaCript 





>20 
# What is Class
they are the best and great ways of making and creating Objects 
they are built on Prototypes but also have syntax which i sunique for the classes itself 


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

>21
# Diffrence between class and constructor 
|Answer|
constructor are more likely like the old ways of making the objects but classes are having a  better elegant syntaxes and morelikely like objected oriented progeraming languages like c# and Java

>22
# try catch
|Answer|
it is used to handle errors in javaScript 
if something happens in the try the catch will execuete as an Error 



// checking
>23
# Decorator in JavaScrpt
is a fucntion which takes another function or class and extends or modifies its behavior but without modifinyg the main souce code 


>24
# named fucntion in JavaScript
its  a function which is a given name when its defined and can be called by that name later  in the code 


function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // Output: 3


>25
# anonymous function 

its a fucntion which does not have a name 


let add = function (a, b) {
    return a + b;
};



>26
# What is DOM 
Document Object Model is a object oriented progeramming of HtML or XML that can be manupulated by using javaScript 



>27
# what is JQuery
is a jc library that simplify the som and handlling events and its weidly used to make the web development more efficient and consistnet 


>28
# Single page APPlication?
(SPA) it a web Application which loads nly one signle page of html and the content of it will be rendered only in the same page of html 
