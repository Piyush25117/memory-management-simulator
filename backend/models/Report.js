import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  totalProcesses:Number,
  failedAllocations:Number,
  externalFragmentation:Number,
  memorySnapshot:Array,
  timestamp:Date
});

export default mongoose.model("Report",ReportSchema);