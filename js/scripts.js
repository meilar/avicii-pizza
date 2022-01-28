// global pricing and ingredient variables

let meatPrice = 4;
let vegPrice = 2;
let premPrice = 8;


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

// UI Logic

function addToBasket() {

}

function removeFromBasket(id) {

}

function refreshBasket() {

}

$(function() {
  $("#order-start").click(function() {
    $("#begin-order").hide();
    $("#pizza-order").show();
  })
  $("#add-btn").click(function() {
    $("#checkout").show();
  })
  $("#clear-btn").click(function() {
    alert("clear button clicked");
  })
  $("#order-finish").click(function() {
    $("#pizza-order").hide();
    $("#checkout").hide();
    $("#thank-you").show();
  })
  $("#start-over").click(function() {
    location.reload(true);
  })
});