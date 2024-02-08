require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const verifySession = require("./verifySession");
const connectDB = require("./dbConnection");
const PORT = process.env.PORT || 3500;

connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use(
  session({
    key: "user_sid",
    secret: "asdjbb38r7tfgiewbfv38f7uig328uifvbiewhvfbiwakfjvbiwe",
    resave: false,
    saveUninitialized: true,
    cookie: { expires: 86400000 },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join("views"));

// Static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Public routes
app.use("/", require("./routers/root"));
app.use("/register", require("./routers/register"));
app.use("/auth", require("./routers/auth"));
app.use("/logout", require("./routers/logout"));

// Protected routes
app.use(verifySession); // Verify session before allowing access to protected routes
app.use("/user", require("./routers/protected/user"));
app.use("/admin", require("./routers/protected/admin"));
app.use("/products", require("./routers/protected/products"));
app.use("/cart", require("./routers/protected/cart"));
app.use("/order", require("./routers/protected/order"));
app.use("/wishlist", require("./routers/protected/wishlist"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
