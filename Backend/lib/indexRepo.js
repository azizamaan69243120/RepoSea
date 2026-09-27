import loadGithubRepo from "./github-loader.js";
import generateDocSummary from "./generateDocSummary.js";
import embedSummary from "./embedSummary.js";
import fs from "fs/promises";

export default async function indexRepo(githubURL, githubToken){


  //Step 1: load github repo using langchain
  console.log("Loading/fetching github repo...");
  const docsArray = await loadGithubRepo(githubURL, githubToken);
  console.log("Github repo fetched...", docsArray.length, "Files found");
    let result = []
  
  for(let doc of docsArray){
     
    //Step2: Generate summary of each document
    let docSummary = await generateDocSummary(doc)
    
     // Step3: Generate embeddings for summary
    let docEmbedding = await embedSummary(docSummary);
    let docObj = {
        summary: docSummary,
        embeddings: docEmbedding,
        sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
        fileName: doc.metadata.source
    }

    result.push(docObj)
  }
 
 await fs.writeFile("embeddings.json", JSON.stringify(result, null, 2));
 console.log("✅ Embeddings generated and saved to embeddings.json")
}