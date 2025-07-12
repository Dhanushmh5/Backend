require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const githubData={
  "login": "Dhanushmh5",
  "id": 187723201,
  "node_id": "U_kgDOCzBtwQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/187723201?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dhanushmh5",
  "html_url": "https://github.com/Dhanushmh5",
  "followers_url": "https://api.github.com/users/Dhanushmh5/followers",
  "following_url": "https://api.github.com/users/Dhanushmh5/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dhanushmh5/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dhanushmh5/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dhanushmh5/subscriptions",
  "organizations_url": "https://api.github.com/users/Dhanushmh5/orgs",
  "repos_url": "https://api.github.com/users/Dhanushmh5/repos",
  "events_url": "https://api.github.com/users/Dhanushmh5/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dhanushmh5/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-11-08T04:35:43Z",
  "updated_at": "2025-06-21T15:21:41Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('Hello insta')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Login Page</h1>'
    )
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

