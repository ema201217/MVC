const express = require("express");
const app = express();

/* Settings */
app.use(express.static('public'));

/* Routers */
const routerMain = require("./routers/main");

/* Routes */
app.use(routerMain);

/* Server */
app.listen(3000, () => {
  console.log("Servidor funcionando");
});
