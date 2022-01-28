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

// pizza logic

function Pizza(size) {
  assignId(false);

}


// topping logic

function Topping(name, price, isVegan) {
  this.name = name;
  this.price = price;
  this.isVegan = isVegan;
}