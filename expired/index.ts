const myName = 'Jahid';
// console.log(myName,'myName');

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

type personType = {name:string,age:number}

const person2: personType ={
    name:'jahid',
    age:18
}

interface Person  {
    name:string;
    age:number;
    hobby?:string;
}

const student: Person = {
    name:'Jahid',
    age:18
}

//  Array

const numbers:(number | string)[] = [12,2,3,4, 'Data']

const persons:(number | object)[] = [
    {
        name:'Jahid',
        id:12
    },
    {
        student1:{
            name:'string'
        }
    }
];

const persons2:Person[] = [
    {
        name:'Jahid',
        age:18
    },
    {
        name:'Join',
        age:18
    }
];


// function

const greeting = (name:string):void => {
    console.log(`Hello World ${name}`)
}
greeting('Jahid')