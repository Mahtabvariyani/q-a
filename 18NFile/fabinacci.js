/* 
so this question is about the Fabinacci numbers which
 is an array of numbers it is also called fabinaci series 

=> 0,1,1,2,3,5,8,13,21,34,.....
so each number is sum of the previous number 

we have always the 0 , 1 number for starting 

for example if(input is 3 )=> output {2}
so the number is 0,1,2
*/


const fabinacci = function(number){
    const array = [0,1]
    for(let i = 2; i<=number; i++){
        array.push(array[i-1] + array[i-2])
    }
    console.log(array)
    return array
}



fabinacci(3)

