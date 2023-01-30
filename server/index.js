const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const usersController = require("./controller/user")

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(express.json());
app.use(cors());
// Routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);

app.get("/user/:name",usersController.getUserByName)



app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

const db = 'mongodb+srv://root:root@one-click-pick.d0yoawz.mongodb.net/test';
mongoose.set('strictQuery', true);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('Database temchi jawha ahla jaw ..');
  })
  .catch((err) => console.log(err));
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
