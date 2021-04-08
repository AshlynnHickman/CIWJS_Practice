class Animal {
    constructor(name){ 
        this.speed = 0; 
        this.name = name; 
    }
    run(speed){ 
        this.speed = speed; 
        alert(`${this.name} runs with the speed of ${this.speed}`); 
    }
    stop(){
        this.speed = 0; 
        alert(`${this.name} stands still`); 
    }
}

let animal = new Animal("My Animal");

class Rabbit extends Animal{ 
    hide(){ 
        alert(`${this.name} hides`); 
    }
    stop(){ 
        // This will be used for rabbit.stop() instead of stop() from class Animal 
        super.stop(); 
        this.hide(); 
        alert(`${this.name} stopped and hid`); 
    }
}

let rabbit = new Rabbit("Chuckles"); 
rabbit.run(5); 
rabbit.stop(); 