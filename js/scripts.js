// global pricing and ingredient variables

let meatPrice = 4;
let vegPrice = 2;
let premPrice = 8;

let pepperoni = new Topping("pepperoni", meatPrice, false);
let sausage = new Topping("sausage", meatPrice, false);
let mushrooms = new Topping("mushroom", vegPrice, true);
let onions = new Topping("onions", meatPrice, true);
let tomatoes = new Topping("sun-dried tomatoes", premPrice, true);
let sardines = new Topping("sardines", premPrice, false);

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
  let pizza = this.retrievePizza(pizzaId);
  this.orderTotal = this.orderTotal - pizza.price;
  delete this.pizzas[pizzaId];
}

Basket.prototype.retrievePizza = function(pizzaId) {
  if (this.pizzas[pizzaId] != undefined) {
    return this.pizzas[pizzaId];
  }
  return false;
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

Pizza.prototype.retrieveTopping = function(toppingId) {
  if (this.toppings[toppingId] != undefined) {
    return this.toppings[toppingId];
  }
  return false;
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

let userBasket = new Basket("","", false);

function attachListeners() {
  $("ul#pizza-list").on("click", "li", function() {
    removeFromBasket(this.id)
  });
}

function startOrder(name, tel, delivery) {
  userBasket.name = name;
  userBasket.phone = tel;
  if (delivery === 1) {
    userBasket.isDelivery = false;
    } else {
    userBasket.isDelivery = true;
    }
}

function getToppings() {
  toppingArray = [];
  if ($("#top-pep").prop("checked") == true) {
    toppingArray.push(pepperoni);
  }
  if ($("#top-saus").prop("checked") == true) {
    toppingArray.push(sausage);
  }
  if ($("#top-sard").prop("checked") == true) {
    toppingArray.push(sardines);
  }
  if ($("#top-mush").prop("checked") == true) {
    toppingArray.push(mushrooms);
  }
  if ($("#top-onion").prop("checked") == true) {
    toppingArray.push(onions);
  }
  if ($("#top-tom").prop("checked") == true) {
    toppingArray.push(tomatoes);
  }
  return toppingArray;
}

function removeFromBasket(id) {
  let removeArr = id.split("-");
  let removeId = removeArr[1];
  userBasket.removePizza(removeId);
  refreshBasket();
}

function listPizzas() {
  $("#pizza-list").empty();
  pizzaArray = Object.keys(userBasket.pizzas)
  pizzaArray.forEach(function (pizzaKey) {
    let pizza = userBasket.retrievePizza(pizzaKey);   
    toppingKeys = Object.keys(pizza.toppings);
    toppingsToList = ["cheese"];    
    toppingKeys.forEach(function (toppingId){
      let topping = pizza.retrieveTopping(toppingId);
      console.log(topping);
      toppingsToList.unshift(topping.name);
    });
    console.log("topping list is " + toppingsToList);
    toppingList = toppingsToList.join(", ");
    let outputText = "$" + pizza.price + ".00 : 1 " + pizza.size + " pizza with " + toppingList;
    $("#pizza-list").append("<li class='list-group-item float-right' id='pizza-" + pizza.Id + "'><div class='row'><div class='col-4'><div class='btn btn-danger remove-btn'>Remove</div></div><div class='col-8'>" + outputText + "</div></li>");
  })
}

function refreshBasket() {
  if (userBasket.isDelivery) {
    deliveryText = "This order will be delivered 60-90 minutes after checkout."
  } else {
    deliveryText = "This order will be available for pickup 45-60 minutes after checkout."
  }
  $("#checkout-name").empty();
  $("#checkout-name").text(userBasket.name);
  $("#checkout-tel").empty();
  $("#checkout-tel").text(userBasket.phone);
  $("#checkout-delivery").empty();
  $("#checkout-delivery").text(deliveryText);
  listPizzas();
  $("#order-total-amt").empty();
  $("#order-total-amt").text(userBasket.orderTotal);
}

$(function() {
  attachListeners();

  $("#order-start").click(function() {
    let userName = $("#cx-name").val();
    let userTel = $("#cx-tel").val();
    let userIsDelivery = $("#inputGroupSelect01").val();
    startOrder(userName, userTel, userIsDelivery);
    $("#begin-order").addClass("hidden");
    $("#pizza-order").removeClass("hidden");
  })
  
  $("#add-btn").click(function() {
    let pizzaSize = $("#pizza-size").val();
    let newPizza = new Pizza(pizzaSize);
    let toppingArray = getToppings()
    toppingArray.forEach( function(topping) {
      newPizza.addTopping(topping);
    })
    userBasket.addPizza(newPizza);
    refreshBasket();
    document.getElementById('pizza-form').reset();
    $("#checkout").removeClass("hidden");
  })

  $("#clear-btn").click(function() {
    document.getElementById('pizza-form').reset();
  })
  
  $("#order-finish").click(function() {
    $("#pizza-order").addClass("hidden");
    $("#checkout").addClass("hidden");
    $("#intro").addClass("hidden");
    $("#thank-you").removeClass("hidden");
  })
  
  $("#start-over").click(function() {
    location.reload(true);
  })

  $("#video-btn").click(function() {
    $("#video")[0].src += "?autoplay=1";
  })
});

