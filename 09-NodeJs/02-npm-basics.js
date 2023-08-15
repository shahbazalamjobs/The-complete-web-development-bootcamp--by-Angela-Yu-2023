// First install sillyname package in terminal with command
npm i sillyname

//  Then inside entry point for project using main javascript file index.js writhe these codes
//  importing the 'sillyname' package to create amusing names

var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// Generating random superhero names
import superheroes from "superheroes";
var name = superheroes.random();
console.log("My name is " + name + " and I am happy about it.");
//=> 'My name is Spider-Ham and I am happy about it.    
