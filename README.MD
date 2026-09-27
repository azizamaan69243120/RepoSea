# repoMate 🚀

AI-powered GitHub repository analysis tool that loads GitHub repositories using LangChain and prepares repository documents for further AI processing.

## 🛠️ Tech Stack

- Node.js
- Express.js
- LangChain
- @langchain/community
- @langchain/core
- CORS

````

## ⚙️ Initialize Node & Installation Dependencies

```bash
npm init -y
````

Install dependencies:

```bash
npm install @langchain/core
npm install @langchain/community cors express ignore
```

## ▶️ Run the Server

Start the backend server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:8080
```

## 🔌 API Endpoint

### Add Repository

**POST**

```text
/add-repo
```

Example request:

```json
{
  "githubURL": "https://github.com/username/repository",
  "githubToken": "your_github_token"
}
```

Example using Postman:

```text
POST http://localhost:8080/add-repo
```

### Response

```json
{
  "message": "Repository indexed successfully"
}
```

## 📄 GitHub Repository Loader

The `github-loader.js` module uses LangChain's `GithubRepoLoader` to load files from a GitHub repository.

Each repository file is converted into a LangChain `Document` containing:

- File content
- File path
- Repository information
- Branch information

Ex output:

```text
  Document {
    pageContent: '# test-1\ncreating repo just for testing purposes\n',
    metadata: {
      source: 'README.md',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: "const express = require('express');\n" +
      "const bcrypt = require('bcrypt');\n" +
      "const jwt = require('jsonwebtoken');\n" +
      "const { validateUser } = require('./utils');\n" +
      '\n' +
      'const router = express.Router();\n' +
      '\n' +
      "router.post('/register', async (req, res) => {\n" +
      '\n' +
      '});\n' +
      '\n' +
      "router.post('/login', async (req, res) => {\n" +
      '\n' +
      '});\n' +
      '\n' +
      'module.exports = router;\n',
    metadata: {
      source: 'auth.js',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: '"this is my new file" \n',
    metadata: {
      source: 'new_file.txt',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  }
 ```   

## Summary -> Generate Embeddings

```text
  Loading/fetching github repo...
Github repo fetched... 6 Files found
Generating summary...
Summary Generated for:  README.md
Generating embedding...
Generating summary...
Summary Generated for:  auth.js
Generating embedding...
Generating summary...
Summary Generated for:  new_file.txt
Generating embedding...
Generating summary...
Summary Generated for:  package.json
Generating embedding...
Generating summary...
Summary Generated for:  product.txt
Generating embedding...
Generating summary...
Summary Generated for:  server.js
Generating embedding...
✅ Embeddings generated and saved to embeddings.json
```
