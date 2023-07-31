function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log(dessert.scoops);
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();