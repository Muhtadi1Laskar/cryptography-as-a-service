import express from "express";
import serverless from "serverless-http";
import router from "../router/index.js";

const app = express();
app.use(express.json());
app.use("/api", router);

export const handler = serverless(app);
