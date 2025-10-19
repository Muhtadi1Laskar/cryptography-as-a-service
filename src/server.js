import dotenv from "dotenv";
import { handler } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

handler.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});