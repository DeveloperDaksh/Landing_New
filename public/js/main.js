// Database connection starts here


// const express = require("express");
// const app = express();
// require("./db/config");
// const Demo = require("./db/models/Demo");

// const port = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.post("#demoform", async (res, req) => {
//   try {
//     console.log(req.body.firstname);
//   } catch (e) {
//     res.statusCode(400).send(e);
//   }
// });

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });




// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

