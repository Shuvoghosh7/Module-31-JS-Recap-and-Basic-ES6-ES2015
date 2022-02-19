const number =[10,20,30,40]
// console.log(...number);
// find max value in array using spread operator
const maxValue=Math.max(...number)
// console.log(maxValue);
// if we have a array now we want create new array and this new array takes previous array element and push another element in new array.
const newNumberArray =[22,...number,55];
console.log(number);
console.log(newNumberArray);