import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleHome = (req, res) => res.send('Hello from Taco');

const handelProfile = (req,res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handelProfile);

export default app;