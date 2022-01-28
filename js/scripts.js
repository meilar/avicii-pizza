// testing code
let meatPrice = 1;


// basket logic

function Basket(name, phone, isDelivery) {
  this.name = name;
  this.phone = phone;
  this.isDelivery = isDelivery;
  this.pizzas = {};
  this.orderTotal = 0;
  this.pizzaId = 0
}

Basket.prototype.addPizza = function(newPizza) {
  ++this.pizzaId
  newPizza.Id = this.pizzaId;
  this.pizzas[newPizza.Id] = newPizza;
  this.orderTotal = this.orderTotal + newPizza.price;
}

Basket.prototype.removePizza = function(pizzaId) {
  this.price = this.price - this.pizzas[pizzaId]
  delete this.pizzas[pizzaId];
}

// pizza logic

function Pizza(size) {
  this.toppingId = 0;
  this.size = size;
  this.toppings = {};
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

Pizza.prototype.addTopping = function(newTopping) {
  ++this.toppingId
  newTopping.id = this.toppingId;
  this.toppings[newTopping.id] = newTopping;
  this.price = this.price + newTopping.price;
}

Pizza.prototype.removeTopping = function(toppingId) {
  let toppingPrice = this.toppings[toppingId-1].price;
  this.price = this.price - toppingPrice;
  delete this.toppings[toppingId - 1];
}

// topping logic

function Topping(name, price, isVegan) {
  this.name = name;
  this.price = price;
  this.isVegan = isVegan;
}

let pepperoni = new Topping("pepperoni", meatPrice, false);
let newPizza = new Pizza("lg");
