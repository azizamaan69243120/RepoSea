import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY_2
})


export default async function embedSummary(docSummary){
    console.log("Generating embedding...");

    const docEmbedding = await ai.models.embedContent({
        model: "gemini-embedding-2",
        contents: docSummary
    })

    return docEmbedding.embeddings[0].values
}