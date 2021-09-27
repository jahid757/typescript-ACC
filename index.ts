// console.log('Hello World');
const fName: string = 'Jahid'
console.log(fName)
interface DevTeam {
    name: string;
    age: stringNumber;
    hobby?: string
}

type stringNumber = string | number;

let Fname: stringNumber = 'Jahid'

type devTeamObject = { name: string, age: stringNumber, hobby: string }

const devTeamMember: { name: string, age: stringNumber, hobby: string } = {
    name: 'jahid',
    age: 18,
    hobby: 'coding'
}
const devTeamMember2: devTeamObject = {
    name: 'person2',
    age: 18,
    hobby: 'watching movie'
}
const devTeamMember3: DevTeam = {
    name: 'person2',
    age: 18,
}
console.log(devTeamMember)


const array: (DevTeam | stringNumber)[] = [12, 24, 54, 'Jahid',
    {
        name: 'jahid',
        age: 18,
        hobby: 'sleeping'
    }
]


function fun(name: string) : void{
    console.log(`Hello ${name}`)
}

fun('Jahid')

console.log('Change')

const plus2Number = (a:number,b:number) :stringNumber => {
    return(`This Result ${a+b}`)
}
plus2Number(10,7);

const fResult = () => {
    const num = plus2Number(10,3)
    console.log(num)
}

fResult()

const introduce = ({name,age} : DevTeam): void => {
    console.log(`Hello Mr. ${name} And I am ${age} Years Old`)
} 

introduce({name:'jahid',age:18,hobby:'Codding'})


type direction = 'Left' | 'Right' | 'Top' | 'Bottom';

let roadDirection: direction = 'Top';

console.log(roadDirection);

const arrayFunction = <T>(array:T[]):T[] => {
    return array
}

arrayFunction<number>([1,2,3])

const res = () => {
    const result = arrayFunction<string>(['jahid','hasan','niloy'])
    console.log(result)
}

res()


const a = <T>(array:T[]):T[] => {
    return array;
}

// enum

enum week {
    sat,
    sun,
    mon,
    tue,
    web,
    thr,
    fri
}

console.log(week.sat)