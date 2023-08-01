class plane{
    constructor(numEngines){
        this.numEngines = numEngines
        this.enginesActive = false;
    }
    startEngine(){
        console.log ('starting engine')
        this.enginesActive = true;
    }
}