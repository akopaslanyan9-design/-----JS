let numbers = [1, 7, 2];
//
//let myFilter = numbers.filter(number => number === 2);
//
//console.log(myFilter.length < 7);
//console.log(myFilter.length > 10);



function clean(numbers, shouldRemove) 
{ return numbers.filter(n => !shouldRemove(n)); }

let result = clean(numbers, n => n % 2 === 0);
console.log(result); 


let result2 = clean(numbers, n => n > 5);
console.log(result2); 
let result3 = clean(numbers, n => n === 2);
console.log(result3); 