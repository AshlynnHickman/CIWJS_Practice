class Cars {
    constructor(speed, gas){ 
        this.speed = speed; 
        this.gas = gas;
    }
    gas(){
        this.speed++; 
        this.gas--; 
    }
    grabGas(){
        this.gas++; 
    }
    slowDown(){
        this.speed--; 
    }
    stop(){
        this.speed = 0; 
        return this.gas; 
    }
}
class Mustang extends Cars{
    sound(sound){
        this.sound = sound; 
    }
}


class Trees { 
    constructor(grow, water){
        this.grow = grow; 
        this.water = water; 
    }
    water(){
        this.water--; 
        this.grow++; 
    }
    grabWater(){
        this.water++; 
    }
}

class Continents { 
    constructor(country){
        this.country = country; 
    }
}

