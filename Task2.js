class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog says: Woof Woof");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat says: Meow Meow");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();
