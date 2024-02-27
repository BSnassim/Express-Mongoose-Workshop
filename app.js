const express = require("express");
const http = require("http");
const app = express();
const path = require("path");

// Routers
const userRouter = require("./routes/user");
const classroomRouter = require("./routes/classroom");
// Database
const mongoose = require("mongoose");
const dbconfig = require("./config/dbconnection.json");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRouter);
app.use("/classroom", classroomRouter);

// Mongo connection
mongoose
  .connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch(() => console.log("failed connecting to db"));

// Http Server config
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");
  socket.emit("msg", "user connected");

  socket.on("msg", (msg) => {
    io.emit("msg", msg);
  });
  socket.on("typing", (msg) => {
    socket.broadcast.emit("typing", msg);
  });
  socket.on("disconnect", () => {
    io.emit("msg", "user disconnected");
  });
});
server.listen(3000, console.log("server running on http://localhost:3000"));

module.exports = app;
