"use strict";
//--------
// arrays
//--------
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 28, 24];
names.push("Bowser");
ages.push(35);
//----------------------------
// type inference with arrays
//----------------------------
let fruits = ["apple", "pears", "bananas", "mangos"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
//-----------------
// object literals
//-----------------
let user = {
    firstName: "Mario",
    age: 30,
    id: 1,
};
user.firstName = "Peach";
user.id = 2;
//-------------------------------------
// type inference with object literals
//-------------------------------------
let person = {
    name: "Luigi",
    score: 35,
};
person.name = "Bowser";
person.score = 40;
const score = person.score;
