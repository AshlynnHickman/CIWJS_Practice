// My Answer 
var sum = 0; 
var product = 0; 


let calculator ={ 
    num1: parseInt(prompt("What is your first value?", "1")),
    num2: parseInt(prompt("What is your second value?", "1")),

    read(){
        alert(this.num1, this.num2);
    },
    sum(){
        sum = num1 + num2;  
    },
    mul(){ 
        product = num1 * num2; 
    }

}; 

calculator.read();
alert(calculator.sum()); 
alert(calulator.mul()); 

// Teacher Answer 
let calulator = {
    sum(){
        return this.a + this.b; 
    }, 
    mul(){ 
        return this.a * this.b; 
    }, 
    read(){ 
        this.a = +prompt("a? ", "0"); 
        this.b = +prompt("b? ", "0"); 
    }
};
calculator.read();
alert(calculator.sum()); 
alert(calulator.mul()); 

