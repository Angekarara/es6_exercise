function IceCream() {
    this.scoops = 0;
  }
IceCream.prototype.addScoop = function(){
    const core = this;
    setTimeout(function(){
        core.spoon++;
        console.log('ready')
    },2000);
};
const desert = new IceCream;
desert.addScoop()