"use strict";
// type Biom = "desert"|"tropics"
// type Living ="remove"|"add"
// import test from "./test"
Object.defineProperty(exports, "__esModule", { value: true });
var desertOne = {
    biom: 'desert',
    sizeOfAviary: 40,
    reservoir: true,
    animals: [],
};
var tropicsOne = {
    biom: 'tropics',
    sizeOfAviary: 100,
    reservoir: true,
    animals: [],
};
var tropicsTwo = {
    biom: 'tropics',
    sizeOfAviary: 80,
    reservoir: true,
    animals: [],
};
var SaigarOne = {
    species: 'saiga',
    biom: 'desert',
    reservoir: false,
    sizeOfAviaryPerAnimal: 22,
    food: ['grass'],
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
};
var Сamel = {
    species: "camel",
    biom: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: ['grass'],
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
};
var CrocodileOne = {
    species: 'crocodile',
    biom: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat', 'burds', 'fish'],
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
};
var CrocodileTwo = {
    species: 'crocodile',
    biom: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat', 'burds', 'fish'],
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
};
var ElephantOne = {
    species: 'elephant',
    biom: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit', 'vegetables'],
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
};
var ElephantTwo = {
    species: 'elephant',
    biom: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit', 'vegetables'],
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
};
function AnimalInAviary(pet, aviary) {
    var allAnimal = aviary === null || aviary === void 0 ? void 0 : aviary.animals;
    // const findPet = aviary.animals?.some(item => item?.name == pet.name);
    return "jjjj";
}
AnimalInAviary(ElephantTwo, tropicsTwo);
console.log(AnimalInAviary(ElephantTwo, tropicsTwo));
// console.log("jjj");
// }
// function isAnimalCanLiveInThisBiom()
// {
// }
// function canAnimalLiveWithNeibours()
// {
// }
// function addOrRemoveAnimalToAviary(){
// }
// function checkAmountOfFoodForAviary(){}
