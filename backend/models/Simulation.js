import mongoose from "mongoose";

const simulationSchema = new mongoose.Schema({

    algorithm: String,

    totalProcesses: Number,
    failedAllocations: Number,

    avgInternalFragmentation: Number,
    avgExternalFragmentation: Number,

    memoryUtilization: Number,

    pagingEnabled: Boolean,

    compactionCount: Number,

    fragmentationHistory: [Number],

    executionLogs: [
        {
            processId: Number,
            size: Number,
            executionTime: Number,
            completed: Boolean
        }
    ],

    createdAt: { type: Date, default: Date.now }

});

export default mongoose.model("Simulation", simulationSchema);