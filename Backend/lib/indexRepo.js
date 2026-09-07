import loadGithubRepo from "./github-loader.js";

export default async function indexRepo(githubURL, githubToken){


    // load github repo using langchain
    loadGithubRepo(githubURL, githubToken);
}