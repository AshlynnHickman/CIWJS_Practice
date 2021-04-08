class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    get getArea(){
        return this.width * this.length; 
    }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

const area = [rect1.area, rec2.area, rec3.area]; 