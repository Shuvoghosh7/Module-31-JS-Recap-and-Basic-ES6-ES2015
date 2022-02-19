const add = (num1,num2)=>num1+num2;
const sum1=add(10,20);
console.log(sum1);

const multi = (n1,n2,n3)=>n1*n2*n3
const result = multi(3,5,20);
console.log(result);

const fiveTime = num =>num*5
const output = fiveTime(3);
console.log(output);

const names=()=>'Shuvo Gosh'
const fulName = names();
console.log(fulName );

const doMath = (x,y)=>{
    const add = x+y;
    const sub=x-y;
    const mult = add*sub;
    return mult;
}
const total=doMath(12,5);
console.log(total);