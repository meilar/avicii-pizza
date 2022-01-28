let meatPrice = 1;
let toppingId = 0;
let pizzaId = 100

let pepperoni = new Topping("pepperoni", meatPrice, false);

function assignId(isTopping) {
  if (isTopping) {
    ++toppingId;
    return toppingId;
  } else {
    ++pizzaId;
    return pizzaId;
  }
}

// basket logic

function Basket(name, phone, isDelivery) {
  this.name = name;
  this.phone = phone;
  this.isDelivery = isDelivery;
  this.pizzas = [];
  this.orderTotal = 0;
}



// pizza logic

Pizza.prototype.addTopping = function(newTopping) {
  newTopping.id = assignId(true);
  this.toppings.push(newTopping);
  this.price = this.price + newTopping.price;
}

Pizza.prototype.removeTopping = function(toppingId) {
  let toppingPrice = this.toppings[toppingId-1].price;
  this.price = this.price - toppingPrice;
  delete this.toppings[toppingId - 1];
}

function Pizza(size) {
  this.id = assignId(false);
  this.size = size;
  this.toppings = [];
  if (size === "sm") {
    this.price = 8;
  } else if (size === "md") {
    this.price = 10;
  } else if (size === "lg") {
    this.price = 12;
  } else {
    this.price = 14;
  }
}


// topping logic

function Topping(name, price, isVegan) {
  this.name = name;
  this.price = price;
  this.isVegan = isVegan;
}