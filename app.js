require("dotenv").config();
require("./config/database").connect();

const express = require("express");

//module with external requests
const userRoute = require("./routes/UserRoutes");
const adminRoute = require("./routes/AdminRoutes");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(userRoute);
app.use(adminRoute);

const { PORT } = process.env;

app.listen(PORT, () => {
	console.log(`The server is listening on ${PORT}`);
});
