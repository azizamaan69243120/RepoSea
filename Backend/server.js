import express from "express"
import indexRepo from "./lib/indexRepo.js"
import askQuestion from "./lib/askQuestion.js";


const app = express();
app.use(express.json())

app.post("/add-repo" , async (req , res)=>{

    const {githubURL,githubToken} = req.body;

    await indexRepo(githubURL, githubToken)

    res.json({
        message : 
        "Repo Indexed Sucessfully ✅, Embeddings generated and saved to embeddings.json",
    });

});


app.post("/ask-question" , async (req,res)=>{

    const {userQuery} = req.body;
     const { AI_Summary  } = await askQuestion(userQuery);


    res.json({
        message : "Query answer generated sucessfully", AI_Summary
    });

});



app.listen("8080",()=>{
    console.log("server is listening on port no 8080")
});