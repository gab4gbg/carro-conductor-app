import "dotenv/config";
import app from "./app.js";
import { connectMongo } from "./infrastructure/config/mongo.js";

// Cache connection across serverless invocations
let connected = false;
async function getApp() {
  if (!connected) {
    await connectMongo();
    connected = true;
  }
  return app;
}

export default async function handler(req, res) {
  const application = await getApp();
  return application(req, res);
}
