let ladder = {
    step: 0, 
    up(){
        this.step++; 
    }, 
    down(){
        this.step--; 
    }, 
    showStep(){ 
        console.log(this.step); 
    },
    height(){ 
        if(this.step >= 5){
            alert("You have reached the top of the ladder");
        }
    }
};

ladder.up().up().up().up().up().up().showStep();
ladder.height(); 

