// type Biom = "desert"|"tropics"
// type Living ="remove"|"add"
// import test from "./test"
var desertOne = {
    biome: 'desert',
    sizeOfAviary: 40,
    freeSpace: 40,
    reservoir: true,
    animals: [],
};
var tropicsOne = {
    biome: 'tropics',
    sizeOfAviary: 100,
    freeSpace: 100,
    reservoir: true,
    animals: [],
};
var tropicsTwo = {
    biome: 'tropics',
    sizeOfAviary: 80,
    freeSpace: 80,
    reservoir: true,
    animals: [],
};
var saigarOne = {
    species: 'saiga',
    biome: 'desert',
    reservoir: false,
    sizeOfAviaryPerAnimal: 22,
    food: ['grass'],
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
};
var camel = {
    species: "camel",
    biome: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: ['grass'],
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
};
var crocodileOne = {
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat', 'burds', 'fish'],
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
};
var crocodileTwo = {
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: ['meat', 'burds', 'fish'],
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
};
var elephantOne = {
    species: 'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit', 'vegetables'],
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
};
var elephantTwo = {
    species: 'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: ['fruit', 'vegetables'],
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
};
function animalInAviary(pet, aviary) {
    var ChechingSuccessful = true;
    var findPet = aviary.animals.find(function (item) { return item.name == pet.name; });
    if (findPet !== undefined) {
        var ChechingSuccessful_1 = false;
        console.log("этот зверь уже в этом вольере");
    }
    if (aviary.biome !== pet.biome) {
        var ChechingSuccessful_2 = false;
        console.log("биом не подходит");
    }
    if (aviary.freeSpace <= pet.sizeOfAviaryPerAnimal) {
        var ChechingSuccessful_3 = false;
        console.log("вольере не хватает места");
    }
    if (aviary.reservoir !== pet.reservoir && pet.reservoir == true) {
        var ChechingSuccessful_4 = false;
        console.log("в вольере нет пруда для животного");
    }
    if (aviary.animals.length > 0) {
        if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) !== pet.predator) {
            var ChechingSuccessful_5 = false;
            console.log("травоядного нельзя селить c хищником");
        }
        if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) == true && (findPet === null || findPet === void 0 ? void 0 : findPet.species) !== pet.species) {
            var ChechingSuccessful_6 = false;
            console.log("травоядного нельзя селить в вольер к хищнику");
        }
        if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) == true && (findPet === null || findPet === void 0 ? void 0 : findPet.species) !== pet.species) {
            var ChechingSuccessful_7 = false;
            console.log("хищников разных видов нельзя селить вместе");
        }
    }
    console.log(ChechingSuccessful);
    return ChechingSuccessful;
}
animalInAviary(elephantTwo, tropicsTwo);
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
