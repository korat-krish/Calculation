// src/gemini-config.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure this matches your .env exactly [cite: 310, 313]
const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);

// Fix: Verify this string exactly [cite: 276]
export const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });