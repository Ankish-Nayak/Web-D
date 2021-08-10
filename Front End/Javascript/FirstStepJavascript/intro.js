let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);
console.log(myData);
let myString = myArray.join(',');
console.log(myString);
// adding elements to array

myArray.push('Cardiff');
console.log(myArray);
myArray.push('Bardford','Brighton') ;
console.log(myArray);
// Removing Elements 

let removedElement = myArray.pop();
console.log(removedElement);
console.log(myArray);

// We can do same things with unshift and shift but the work at the start of the array
myArray.unshift(removedElement);
console.log(myArray);
removedElement = myArray.shift();
console.log(removedElement);