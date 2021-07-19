const myName = 'Jahid';
console.log(myName,'myName');

let studentId: string | number = 12341;
studentId = 'web-123432'

type stringOrNumber = string | number;

let studentId2:stringOrNumber = 1234;
studentId2 = '123321d';

const user = {
    name:'Jahid',
    age:18,
    passion:'Coding'
}

const person: {name:string, age:number, married:boolean} = {
    name:'Jahid',
    age:18,
    married:false
} 