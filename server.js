const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const config = require("./config/config");
const app = express();
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: config.CORS_ORIGIN,
  })
);
app.get("/", (req, res, next) => {
  res.send("This is the HomePage");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use(require("./middleware/errorMiddleware"));

const PORT = config.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
