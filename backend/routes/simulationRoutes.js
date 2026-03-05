import express from "express";
import Report from "../models/Report.js";

const router = express.Router();

// ✅ SAVE REPORT ROUTE
router.post("/save-report", async (req,res)=>{
  try{
    const report = new Report(req.body);
    await report.save();
    res.json({message:"Report saved successfully"});
  }catch(error){
    console.log(error);
    res.status(500).json({error:"Error saving report"});
  }
});

export default router;