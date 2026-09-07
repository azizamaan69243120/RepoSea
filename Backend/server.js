import express from "express"
import indexRepo from "./lib/indexRepo.js"


const app = express();
app.use(express.json())

app.post("/add-repo" , (req , res)=>{

    const {githubURL,githubToken} = req.body;

    indexRepo(githubURL, githubToken)

    res.json({
        message : "Repo Indexed Sucessfully"
    })

});


app.post("/ask-question" , (req,res)=>{

    const {userQuery} = req.body

    res.json({
        message : "Query answer generated sucessfully"
    })

})



app.listen("8080",()=>{
    console.log("server is listening on port no 8080")
});