// type Biom = "desert"|"tropics"
// type Living ="remove"|"add"
// import test from "./test"
interface Animal {
    species: string;
    biome: string;
    reservoir: boolean;
    sizeOfAviaryPerAnimal: number;
    food: string;
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
    food: 'grass',
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
}
const camel: Pet={
    species:"camel",
    biome: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: 'grass',
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
}

const crocodileOne: Pet ={
    species:'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: 'meat',
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
}
const crocodileTwo: Pet={
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: 'meat',
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
}
const elephantOne: Pet ={
    species:'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'vegetables',
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
}
const elephantTwo: Pet ={
    species:'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'vegetables',
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
}
const tigerOne: Pet ={
    species:'tiger',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'meat',
    predator: false,
    name: 'Tima',
    dailyFoodNorm: 15
}

let AllAviaries: Aviary[] = [desertOne, tropicsOne, tropicsTwo];

function getAmountOfFood():void
{
    let Meat = 0;
    let Grass = 0;
    let Vegetables =0;
    AllAviaries.forEach(volier=>{
        volier.animals.forEach(items=> {
        if (items.food=="meat")
        {
            Meat+= items.dailyFoodNorm;
        }
        if (items.food=="grass")
        {
            Grass+= items.dailyFoodNorm;
        }
        if (items.food=="vegetables")
        {
            Vegetables+= items.dailyFoodNorm;
        }
    });
    });
    console.log("мясо "+ Meat);
    console.log("Трава "+Grass);
    console.log("овощи "+Vegetables);
}


function compatibilityCheck (pet: Pet, aviary: Aviary):boolean{
    const findPet = aviary.animals.find(item => item.name == pet.name);
    if (findPet!== undefined )
        {
            console.log("этот зверь уже в этом вольере"); 
            return false;
        }

        if (aviary.biome!==pet.biome)
        {              
            console.log("биом не подходит");
            return false;
        }
        
        if(aviary.freeSpace<=pet.sizeOfAviaryPerAnimal)
        {
            console.log("в вольере не хватает места");
            return false;
        }
        if(aviary.reservoir!==pet.reservoir&& pet.reservoir==true)
        {
            console.log("в вольере нет пруда для животного");
            return false;
        }
        if(aviary.animals.length>0)
        {
            return checkNeiboursInAviary(pet, findPet);
        }
        return true;
    }
    
    function checkNeiboursInAviary(pet: Pet, findPet):boolean{  

        if(findPet?.predator!== pet.predator)
        {
            console.log("травоядного нельзя селить c хищником");
            return false;
    }
    if(findPet?.predator==true&& findPet?.species!==pet.species)
    {
        console.log("травоядного нельзя селить в вольер к хищнику");
        return false;
    }
    if(findPet?.predator==true&& findPet?.species!==pet.species)
    {
        console.log("хищников разных видов нельзя селить вместе");
        return false;
    }
    return true;
}


function addAnimalToAviary(pet: Pet, aviary: Aviary):string{
    let Check = compatibilityCheck(pet,aviary);
    if(Check ==true )
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

addAnimalToAviary(tigerOne, tropicsOne);
addAnimalToAviary(camel, desertOne);
addAnimalToAviary(elephantOne, tropicsOne);
removeAnimalFromAviary(tigerOne,tropicsOne);
addAnimalToAviary(crocodileOne, tropicsTwo);
getAmountOfFood();