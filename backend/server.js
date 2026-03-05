import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import simulationRoutes from "./routes/simulationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/memorySimulator")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// ✅ All simulation + report routes handled here
app.use("/api/simulations", simulationRoutes);

app.listen(5000, ()=>console.log("Server running on port 5000"));