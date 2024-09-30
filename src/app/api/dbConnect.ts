import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface Connection {
    isConnected?: number;
}

const connection: Connection = {};

async function dbConnect() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        const db = await mongoose.connect(MONGODB_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default dbConnect;
