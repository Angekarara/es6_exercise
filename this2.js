function IceCream(){
    this.spoon = 0;
}
IceCream.prototype.addScoop = function(){
    setTimeout(() => {
        this.spoon++;
        console.log(desert.spoon)
    }, 1000);
}
const desert = new IceCream;
desert.addScoop();