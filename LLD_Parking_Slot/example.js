// Example 1
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printName() {
        console.log(this.name, this.id);
    }
}

const x = new Student('anand', 1)
// console.log(x)
x.printName();




//----------------------------------------------------------------------------------------------------//



// Example 2
class Mamals {
    constructor(name, livesIn, eats, isCarnivorous) {
        this.name = name;
        this.livesIn = livesIn;
        this.eats = eats;
        this.isCarnivorous = isCarnivorous;
    }
}


// Cow is subclass/childclass of Mamals
// Using extends to inherit all property of constructor from Mamals class.
class Cow extends Mamals {

    // constructor for Cow
    constructor(name, gender) {

        // to get Mamals constructor here we need to use super() for that.
        super(name, "City", "Grass", false)
        this.gender = gender;
    }
}


const animal = new Cow('Chulbuli', 'female')
console.log(animal)