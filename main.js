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
    food: 'grass',
    predator: false,
    name: 'Bob',
    dailyFoodNorm: 1.2
};
var camel = {
    species: "camel",
    biome: "desert",
    reservoir: false,
    sizeOfAviaryPerAnimal: 10,
    food: 'grass',
    predator: false,
    name: 'Cocoa',
    dailyFoodNorm: 3
};
var crocodileOne = {
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: 'meat',
    predator: true,
    name: 'Kiki',
    dailyFoodNorm: 1
};
var crocodileTwo = {
    species: 'crocodile',
    biome: 'tropics',
    reservoir: true,
    sizeOfAviaryPerAnimal: 30,
    food: 'meat',
    predator: true,
    name: 'Tom',
    dailyFoodNorm: 1
};
var elephantOne = {
    species: 'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'vegetables',
    predator: false,
    name: 'Ella',
    dailyFoodNorm: 30
};
var elephantTwo = {
    species: 'elephant',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'vegetables',
    predator: false,
    name: 'Eigon',
    dailyFoodNorm: 30
};
var tigerOne = {
    species: 'tiger',
    biome: 'tropics',
    reservoir: false,
    sizeOfAviaryPerAnimal: 25,
    food: 'meat',
    predator: false,
    name: 'Tima',
    dailyFoodNorm: 15
};
var AllAviaries = [desertOne, tropicsOne, tropicsTwo];
function getAmountOfFood() {
    var Meat = 0;
    var Grass = 0;
    var Vegetables = 0;
    tropicsOne.animals.forEach(function (items) {
        if (items.food == "meat") {
            Meat += items.dailyFoodNorm;
        }
        if (items.food == "grass") {
            Grass += items.dailyFoodNorm;
        }
        if (items.food == "vegetables") {
            Vegetables += items.dailyFoodNorm;
        }
    });
    console.log("мясо {Meat}");
    console.log(Grass);
    console.log(Vegetables);
}
function compatibilityCheck(pet, aviary) {
    var findPet = aviary.animals.find(function (item) { return item.name == pet.name; });
    if (findPet !== undefined) {
        console.log("этот зверь уже в этом вольере");
        return false;
    }
    if (aviary.biome !== pet.biome) {
        console.log("биом не подходит");
        return false;
    }
    if (aviary.freeSpace <= pet.sizeOfAviaryPerAnimal) {
        console.log("в вольере не хватает места");
        return false;
    }
    if (aviary.reservoir !== pet.reservoir && pet.reservoir == true) {
        console.log("в вольере нет пруда для животного");
        return false;
    }
    if (aviary.animals.length > 0) {
        return checkNeiboursInAviary(pet, findPet);
    }
    return true;
}
function checkNeiboursInAviary(pet, findPet) {
    if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) !== pet.predator) {
        console.log("травоядного нельзя селить c хищником");
        return false;
    }
    if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) == true && (findPet === null || findPet === void 0 ? void 0 : findPet.species) !== pet.species) {
        console.log("травоядного нельзя селить в вольер к хищнику");
        return false;
    }
    if ((findPet === null || findPet === void 0 ? void 0 : findPet.predator) == true && (findPet === null || findPet === void 0 ? void 0 : findPet.species) !== pet.species) {
        console.log("хищников разных видов нельзя селить вместе");
        return false;
    }
    return true;
}
function addAnimalToAviary(pet, aviary) {
    var Check = compatibilityCheck(pet, aviary);
    if (Check == true) {
        aviary.animals.push(pet);
        aviary.freeSpace -= pet.sizeOfAviaryPerAnimal;
        return "животное успешно добавлено в вольер";
    }
    else {
        return "животное не может быть добавлено в вольер";
    }
}
function removeAnimalFromAviary(pet, aviary) {
    var findPet = aviary.animals.find(function (item) { return item.name == pet.name; });
    if (findPet == undefined) {
        return "животного нет в вольере";
    }
    else {
        var index = aviary.animals.indexOf(pet);
        aviary.animals.splice(index, 1);
        aviary.freeSpace += pet.sizeOfAviaryPerAnimal;
        return "животное успешно удалено из вольера";
    }
}
addAnimalToAviary(tigerOne, tropicsOne);
getAmountOfFood();
