//so what is hoisting in  JavaScript?


// Hosting is a behaviour of JavaScript that takes the  declaration of functions, variables, classes, or imports to the top of their scope,





console.log(a)

var a = "name"

console.log(a)

//for example here we have var and the value is name (by default you can acces the var but it has its default value which is undefned and it stays undefined till it reaches the line which is declared a variable to it )

console.log("but-Now")

//if we change the var to let or const we get an error says ('Cannot access 'a' before initialization') why is that 



console.log(a) // Cannot access 'a' before initialization 


let a = "name"

console.log(a)

//same goes for the functions if we use the function declration like this

function sum(){
    console.log('Function declarations')
}


// you can accesss it from any where in the code but if you use the function expression 


const sum = function (){
    console.log('function expression')

}

//becouse it behaves like exaclt the same is variable it will not be accesible