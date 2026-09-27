import express from "express"
import indexRepo from "./lib/indexRepo.js"


const app = express();
app.use(express.json())

app.post("/add-repo" , async (req , res)=>{

    const {githubURL,githubToken} = req.body;

    await indexRepo(githubURL, githubToken)

    res.json({
        message : "Repo Indexed Sucessfully ✅, Embeddings generated and saved to embeddings.json",
    });

});


app.post("/ask-question" , (req,res)=>{

    const {userQuery} = req.body

    res.json({
        message : "Query answer generated sucessfully",
    });

});



app.listen("8080",()=>{
    console.log("server is listening on port no 8080")
});