import cosineSimilarity from "./cosineSimilarity.js";
import embedQuery from "./embedQuery.js";
import loadCodebaseEmbeddings from "./loadCodebaseEmbeddings.js";

export default async function queryCodebase(userQuery) {
  // Step 1: Generate embeddings for userQuery
  const queryEmbedding = await embedQuery(userQuery);
  //    []

  // Step 2: Load codebase embeddings
  const codebaseEmbeddings = await loadCodebaseEmbeddings();
  // [{[]}, {[]}, {[]}]

  // Step3: Generate cosine similarity betwen queryEmbedding and all child of codebaseEmbeddings
  //   const similarityScore = cosineSimilarity(
  //     queryEmbedding,
  //     codebaseEmbeddings[0].embeddings,
  //   );

  const resultArr = codebaseEmbeddings.map((fileObj) => {
    let similarityScore = cosineSimilarity(queryEmbedding, fileObj.embeddings);

    return {
      similarityScore: similarityScore,
      fileName: fileObj.fileName,
      sourceCode: fileObj.sourceCode,
      fileSummary: fileObj.summary,
    };
  });

  return resultArr
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .filter((result) => result.similarityScore > 0.6);
}

// askQuestion(
//   "authentication code?",
// );