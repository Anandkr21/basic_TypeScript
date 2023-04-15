// Example 2
class Mamals {
    name: string;
    livesIn: string;
    eats: string;
    isCarnivorous: boolean;
    constructor(name: string, livesIn: string, eats: string, isCarnivorous: boolean) {
        this.name = name;
        this.livesIn = livesIn;
        this.eats = eats;
        this.isCarnivorous = isCarnivorous;
    }
}



// 1. Cow is subclass/childclass of Mamals
// 2. Using extends to inherit all the constructor property from Mamals class
class Cow extends Mamals {
    gender: "M" | "F";
    // constructor for Cow
    constructor(name: string, gender: "M" | "F") {
        // to get Mamals constructor here we need to use super() methood for that.
        super(name, "City", "Grass", false)
        this.gender = gender;
    }
}

const animal = new Cow('Chulbuli', "F")
console.log('animal')