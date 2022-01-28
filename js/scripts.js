let meatPrice = 1;
let toppingId = 0;
let pizzaId = 100

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

function Pizza(size) {
  this.id = assignId(false);
  this.size = size;
  this.toppings = [];
}


// topping logic

function Topping(name, price, isVegan) {
  this.name = name;
  this.price = price;
  this.isVegan = isVegan;
}