# eatdaburger
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Screenshots](#sceenshots)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project
This is a burger logger using MySQL, Node, Express, Handlebars and an ORM. It is designed using the MVC design pattern; uses Node and MySQL to query and route data in your app, and uses Handlebars to generate your HTML.

Users of the app can create a burger and add it to a database, then devour the burger which updates the devoured state in the database. After updating the state, the DOM will be updated to display the results on the webpage.

The file structure takes the following structure:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Built With
* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* JavaScript
* [jQuery](https://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [MySQL](https://expressjs.com/)
* [Express](https://expressjs.com/)
* [Express-Handlebars](https://handlebarsjs.com/)
* ORM
* MVC


## Getting Started

### Prerequisites
* A web browser to display the application


### Installation  
No Installation is required.


## Usage
1. Visit  the [app website](https://prepare-2-feast.herokuapp.com/)
2. Under "Order Up" enter a burger name in the textfield next to "Burger Name:"
3. Click `Add Burger` to add a burger to the ORM model and display it on the DOM
4. Click `OM NOM NOM!` next to or below a burger to devourt it, and watch it move to the devoured list.


### Screenshots
1. Webpage
![product-gif][product-gif]


## Contact
Michael Dennison - [LinkedIn](https://linkedin.com/in/michaeltdennison) - miketdennison@gmail.com  
Project Link: [https://github.com/miketdennison/friendfinder](https://github.com/miketdennison/eatdaburger)


## Acknowledgements
* [npm](https://www.npmjs.com/)
* [heroku](https://www.heroku.com/)

<!-- IMAGES -->
[product-gif]: ./readme-imgs/product.gif
