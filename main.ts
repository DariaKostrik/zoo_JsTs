// type Biom = "desert"|"tropics"
// type Living ="remove"|"add"
// import test from "./test"

interface Animal {
    species: string;
    biom: string;
    reservoir: boolean;
    sizeOfAviaryPerAnimal: number;
    food: string [];
    predator: boolean;
}

interface Species{
    name: string;
    dailyFoodNorm: number;
}
export type Pet = Animal&Species;

interface Aviary {
    
    biom: string;
    sizeOfAviary: number;
    reservoir:boolean; 
    animals: any[];
}

let desertOne: Aviary ={
    biom: 'desert',
    sizeOfAviary: 40,
    reservoir:true,
    animals: [],
}
let tropicsOne: Aviary ={
    biom: 'tropics',
    sizeOfAviary: 100,
    reservoir:true,
    animals: [],
}
let tropicsTwo: Aviary ={
    biom: 'tropics',
    sizeOfAviary: 80,
    reservoir: true,
    animals: [],
}



const SaigarOne: Pet ={
    species:'saiga',
    biom: 'desert',
    reservoir: false,
    sizeOfAviaryPerAnimal: 22,
    food: ['grass'],
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
}
const Сamel: Pet={
    species:"camel",
    biom: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: ['grass'],
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
}

const CrocodileOne: Pet ={
    species:'crocodile',
    biom: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat','burds','fish'],
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
}
const CrocodileTwo: Pet={
    species: 'crocodile',
    biom: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat','burds','fish'],
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
}
const ElephantOne: Pet ={
    species:'elephant',
    biom: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit','vegetables'],
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
}
const ElephantTwo: Pet ={
    species:'elephant',
    biom: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit','vegetables'],
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
}

function AnimalInAviary(pet: Pet, aviary: Aviary):string{

    const allAnimal = aviary.animals;
    const findPet = allAnimal.some(item => item.name == pet.name);
        return "Это";
    }
AnimalInAviary(ElephantTwo,tropicsTwo);
console.log(AnimalInAviary(ElephantTwo,tropicsTwo));


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

