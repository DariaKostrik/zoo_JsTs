type Biom = "desert"|"tropics"|"ocean"
interface Aviary {

    biom: Biom,
    sizeOfAviary: number,
    reservoir:boolean; 
}

interface Animal {
    species: string,
    biom: Biom,
    reservoir: boolean;
    SizeOfAviaryPerAnimal: number;
    food: string[];
    predator: boolean;
}

interface Сreature{
    name: string;
    dailyFoodNorm: number;
}