import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"; // ✅ Fix case mismatch

const app = express();

app.use(cors()); 
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000; 
const MONGO_URI = process.env.MongoDBURI;

app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

// Defining routes
app.use("/book", bookRoute); 
app.use("/user", userRoute); 

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
