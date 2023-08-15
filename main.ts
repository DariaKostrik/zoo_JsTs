// type Biom = "desert"|"tropics"
// type Living ="remove"|"add"
// import test from "./test"

interface Animal {
    species: string;
    biome: string;
    reservoir: boolean;
    sizeOfAviaryPerAnimal: number;
    food: string [];
    predator: boolean;
}

interface Species{
    name: string;
    dailyFoodNorm: number;
}
// export
 type Pet = Animal&Species;

interface Aviary {
    
    biome: string;
    sizeOfAviary: number;
    freeSpace: number;
    reservoir:boolean; 
    animals: Pet[];
}

let desertOne: Aviary ={
    biome: 'desert',
    sizeOfAviary: 40,
    freeSpace: 40,
    reservoir:true,
    animals: [],
}
let tropicsOne: Aviary ={
    biome: 'tropics',
    sizeOfAviary: 100,
    freeSpace: 100,
    reservoir:true,
    animals: [],
}
let tropicsTwo: Aviary ={
    biome: 'tropics',
    sizeOfAviary: 80,
    freeSpace: 80,
    reservoir: true,
    animals: [],
}



const saigarOne: Pet ={
    species:'saiga',
    biome: 'desert',
    reservoir: false,
    sizeOfAviaryPerAnimal: 22,
    food: ['grass'],
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
}
const camel: Pet={
    species:"camel",
    biome: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: ['grass'],
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
}

const crocodileOne: Pet ={
    species:'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat','burds','fish'],
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
}
const crocodileTwo: Pet={
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat','burds','fish'],
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
}
const elephantOne: Pet ={
    species:'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit','vegetables'],
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
}
const elephantTwo: Pet ={
    species:'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit','vegetables'],
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
}

function compatibilityCheck (pet: Pet, aviary: Aviary):boolean{
    let ChechingSuccessful=true;
    const findPet = aviary.animals.find(item => item.name == pet.name);
    if (findPet!== undefined )
        {
            let ChechingSuccessful=false;
            console.log("этот зверь уже в этом вольере"); 
        }

        if (aviary.biome!==pet.biome)
        {  let ChechingSuccessful=false;
            console.log("биом не подходит");
        }
        
        if(aviary.freeSpace<=pet.sizeOfAviaryPerAnimal)
        {
            let ChechingSuccessful=false;
            console.log("в вольере не хватает места");
        }
        if(aviary.reservoir!==pet.reservoir&& pet.reservoir==true)
        {
            let ChechingSuccessful=false;
            console.log("в вольере нет пруда для животного");
        }
        if(aviary.animals.length>0)
        {
            let ChechingSuccessful= checkNeiboursInAviary(pet, findPet);
        }
        console.log(ChechingSuccessful);
        return ChechingSuccessful;
    }
    
    function checkNeiboursInAviary(pet: Pet, findPet):boolean{  
        let ChechingSuccessful=true;
        if(findPet?.predator!== pet.predator)
        {
        let ChechingSuccessful=false;
        console.log("травоядного нельзя селить c хищником");
    }
    if(findPet?.predator==true&& findPet?.species!==pet.species)
    {
        let ChechingSuccessful=false;
        console.log("травоядного нельзя селить в вольер к хищнику");
    }
    if(findPet?.predator==true&& findPet?.species!==pet.species)
    {
        let ChechingSuccessful=false;
        console.log("хищников разных видов нельзя селить вместе");
    }
    return ChechingSuccessful;
}


function addAnimalToAviary(pet: Pet, aviary: Aviary):string{
 
    if(compatibilityCheck(pet,aviary) ==true )
    {
        aviary.animals.push(pet);
        aviary.freeSpace -= pet.sizeOfAviaryPerAnimal;
        return "животное успешно добавлено в вольер"
    }
    else{
        return "животное не может быть добавлено в вольер" 
    }
}


function removeAnimalFromAviary(pet: Pet, aviary: Aviary):string{
    const findPet = aviary.animals.find(item => item.name == pet.name);
    if(findPet==undefined)
    {
        return "животного нет в вольере";
    }
    else
    {   
        const index = aviary.animals.indexOf(pet);
        aviary.animals.splice(index, 1);
        aviary.freeSpace+=pet.sizeOfAviaryPerAnimal;
        return "животное успешно удалено из вольера";
    }
    
}

compatibilityCheck(elephantTwo, tropicsTwo); 
