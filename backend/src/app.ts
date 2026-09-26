import express from "express";

const app = express();

// Middleware: incoming request body ko JSON ke roop mein parse karta hai
app.use(express.json());

export default app;