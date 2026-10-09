import fs from "fs/promises"

export default async function loadCodebaseEmbeddings(){
    console.log("Fetching codebase embeddings...")
    const data = await fs.readFile("embeddings.json", "utf-8");
    return await JSON.parse(data);
}

// loadCodebaseEmbeddings();