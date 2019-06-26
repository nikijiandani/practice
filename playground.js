class Pizza {

  constructor(crust) {
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  set Topping(topping) {
    this.toppings.push(topping);
  }
  // setSize now includes data validation
  set Size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
  get Size() {
    return this._size;
  }
  get Price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);


    
  }
}

//DRIVER CODE

let pizza = new Pizza();

pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)