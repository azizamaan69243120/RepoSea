import {GithubRepoLoader} from "@langchain/community/document_loaders/web/github";
import dotenv from "dotenv";

dotenv.config();

export default async function loadGithubRepo(githubURL,githubToken){

    const loader = new GithubRepoLoader(githubURL, {
            recursive: true,
    // Add your API key here to bypass rate limits:
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    ignoreFiles: [
      ".gitignore",
      "node_modules/**",
      "dist/**",
      "build/**",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
    ],
    });

    const docsArray = await loader.load();

    // console.log(docArray);
    return docsArray;
}


// loadGithubRepo("https://github.com/ZayeemMohd/taskflowAI")