function add(num1,num2){
    return num1+num2;
}
const sum1=add(10,20);
console.log(sum1);

// fnction expression
const add2=function adds(num1,num2){
    return num1+num2;
}
const sum2=add2(20,20);
console.log(sum2);
// fnction expression (anonymous)
const add3=function(num1,num2){
    return num1+num2;
}
const sum3=add3(20,30);
console.log(sum3);
//arrow function
const add4=(num1,num2)=> num1+num2
const sum4=add4(2,30);
console.log(sum4);