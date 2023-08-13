type Biom = "desert"|"tropics"|"tundra"
interface Aviary {
    
    biom: Biom,
    sizeOfAviary: number,
    reservoir:boolean; 
}


const Desert: Aviary ={
    biom: "desert",
    sizeOfAviary: 40,
    reservoir:true
}
const TropicsOne: Aviary ={
    biom: "tropics",
    sizeOfAviary: 100,
    reservoir:true
}
const TropicsTwo: Aviary ={
    biom: "tropics",
    sizeOfAviary: 80,
    reservoir:true
}

interface Animal {
    species: string,
    biom: Biom,
    reservoir: boolean;
    sizeOfAviaryPerAnimal: number;
    food: string[];
    predator: boolean;
}

interface Species{
    name: string|undefined ;
    dailyFoodNorm: number;
}


let SaigarOne: Animal&Species ={
    species:"saiga",
    biom: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 22,
    food: ["grass"],
    predator: false,
    name: "Bob",
    dailyFoodNorm: 1.2
}
let Сamel: Animal& Species ={
    species:"camel",
    biom: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: ["grass"],
    predator: false,
    name: undefined,
    dailyFoodNorm: 3
}

    let CrocodileOne: Animal& Species ={
    species:"crocodile",
    biom: "tropics",
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ["meat","burds","fish"],
    predator: true,
    name: "Kiki",
    dailyFoodNorm: 1
}
let CrocodileTwo: Animal&Species ={
    species: "crocodile",
    biom: "tropics",
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ["meat","burds","fish"],
    predator: true,
    name: "Tom",
    dailyFoodNorm: 1
}
let ElephantOne: Animal&Species ={
    species:"elephant",
    biom: "tropics",
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ["fruit","vegetables"],
    predator: false,
    name: "Ella",
    dailyFoodNorm: 30
}
let ElephantTwo: Animal&Species ={
    species:"elephant",
    biom: "tropics",
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ["fruit","vegetables"],
    predator: false,
    name: "Eigon",
    dailyFoodNorm: 30
}