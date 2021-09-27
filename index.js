"use strict";
// console.log('Hello World');
const fName = 'Jahid';
console.log(fName);
let Fname = 'Jahid';
const devTeamMember = {
    name: 'jahid',
    age: 18,
    hobby: 'coding'
};
const devTeamMember2 = {
    name: 'person2',
    age: 18,
    hobby: 'watching movie'
};
const devTeamMember3 = {
    name: 'person2',
    age: 18,
};
console.log(devTeamMember);
const array = [12, 24, 54, 'Jahid',
    {
        name: 'jahid',
        age: 18,
        hobby: 'sleeping'
    }
];
function fun(name) {
    console.log(`Hello ${name}`);
}
fun('Jahid');
console.log('Change');
const plus2Number = (a, b) => {
    return (`This Result ${a + b}`);
};
plus2Number(10, 7);
const fResult = () => {
    const num = plus2Number(10, 3);
    console.log(num);
};
fResult();
const introduce = ({ name, age }) => {
    console.log(`Hello Mr. ${name} And I am ${age} Years Old`);
};
introduce({ name: 'jahid', age: 18, hobby: 'Codding' });
let roadDirection = 'Top';
console.log(roadDirection);
const arrayFunction = (array) => {
    return array;
};
arrayFunction([1, 2, 3]);
const res = () => {
    const result = arrayFunction(['jahid', 'hasan', 'niloy']);
    console.log(result);
};
res();
const a = (array) => {
    return array;
};
// enum
var week;
(function (week) {
    week[week["sat"] = 0] = "sat";
    week[week["sun"] = 1] = "sun";
    week[week["mon"] = 2] = "mon";
    week[week["tue"] = 3] = "tue";
    week[week["web"] = 4] = "web";
    week[week["thr"] = 5] = "thr";
    week[week["fri"] = 6] = "fri";
})(week || (week = {}));
console.log(week.sat);
