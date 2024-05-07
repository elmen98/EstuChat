const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/index");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");


const mongosanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));


app.use(
    cors({
      origin: "https://estu-chat-frontend.vercel.app/auth/login",
  
      methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
  
      credentials: true, //
  
      //   Access-Control-Allow-Credentials is a header that, when set to true , tells browsers to expose the response to the frontend JavaScript code. The credentials consist of cookies, authorization headers, and TLS client certificates.
    })
  );

app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000, // In one hour
  message: "Too many Requests from this IP, please try again in an hour!",
});

app.use("/tawk", limiter);

app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use(mongosanitize());

app.use(xss());

app.use(routes);
module.exports = app;
