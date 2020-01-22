# 13_Burger_Logger

This is a burger logger made with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern, using Node and MySQL to query and route data within the app, and Handlebars to generate the HTML.


Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

#### DB Setup

 * Database - `burgers_db`.
   * Table - `burgers`
     * Fields:   
        **id**: an auto incrementing int that serves as the primary key.
        **burger_name**: a string.
        **devoured**: a boolean.

#### Directory structure

```

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

#### Pictures of Application

<img src='/public/assets/img/App1.JPG'>
<br><br>
<img src='/public/assets/img/App2.JPG'>
<br><br>
<img src='/public/assets/img/App3.JPG'>
<br><br>
<img src='/public/assets/img/App4.JPG'>