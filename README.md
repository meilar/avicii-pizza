<h1 align="center">Avicii's Pizza</h1>

Matthew Eilar | [LinkedIn](https://www.linkedin.com/in/eilar-503/) | [email](mailto:<meilar@gmail.com>) | [website](www.mattheweilar.com)

## About this project
 This (loving) tribute to the [Swedish DJ Avicii](https://en.wikipedia.org/wiki/Avicii) and the southern California pizza chain [Ameci's Pizza & Pasta](https://en.wikipedia.org/wiki/Avicii) was created to fulfill the requirements of my [Epicodus](www.epicodus.com) intermediate JavaScript code review project.

## Features
This page allows the user to assemble an order of pizzas. The user is able to customize each pizza by selecting a size and toppings. 

## How to view

To view this webpage:

1. Ensure that you have the most recent version of Git installed. [Instructions can be found here.](https://github.com/git-guides/install-git) 
1. Clone this repository to your local machine using the Terminal or Bash command `git clone https://github.com/meilar/pizza.git`.
2. Open "index.html" in a CSS3 and HTML5-compliant browser such as Google Chrome, Mozilla Firefox, or Apple Safari.

[Alternately, a hosted version of this pages is available to view on Github Pages.](https://meilar.github.io/pizza)

## Technologies Used

This site incorporates the following frameworks and languages:

- HTML 5
- CSS 3
- jQuery 3.6.0
- Bootstrap 4.5

The following software tools were used to develop this page:

- VS Code
- Google Chrome
- Git

## Testing
The following tests were conducted to focus development and practice test-driven development.

#### Describe: Topping()
Test: "It will create an object "Topping" that has a name, price, and vegan status."
Code: `let pepperoni = new Topping("pepperoni", meatPrice, false);`
`console.log(pepperoni);`
Expected output `"Topping {name: "pepperoni", price: 1, isVegan: false}"`

#### Describe: assignId()
Test: "It will assign a 3 digit ID counting from 100 to pizzas and an id counting from 1 to toppings."
Code: `assignId(true);`
Expected output: `1`
code: `assignId(false);`
Expected output: `101` 

#### Describe: Pizza()
Test: "It will create an object "Pizza" that has an ID, size, and toppings."
Code: `let pizza1 = new Pizza("sm");`
`pizza1;`
Expected output `"Pizza {id: "101", size: "sm", toppings: Array(0)}"`

#### Describe: Basket()
Test: "It will create an object "Basket" that has cx name, cx phone, pickup or delivery, order total, and pizzas in the order."
Code: `let testBasket = new Basket("Matt", "503-555-5555", false);`
`testBasket;`
Expected output `"Basket {name: "Matt", phone: "503-555-5555", isDelivery: false, pizzas: Array(0), orderTotal: 0}"`

## Acknowledgements

Thank you to my partner, Alex, for support in all ways. Thank you to my parents for encouraging technology exploration, even when resources were scarce. Thank you to the Kohlenberg Foundation for the delicious sourdough bread and BBQ.

## License 

© 2022 Matthew Eilar

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.