---
title: 'Express.js'
slug: 'express-js'
date: '2019-02-12T00:55:00-05:00'
published: true
images:
tags:
  - 'javascript'
  - 'nodejs'
---

> Fast, unopinionated, minimalist web framework for Node.js
>
> - [expressjs](https://expressjs.com/)

Express is a web application framework built on node.js. In this post I'll run through the basics of setting it up and creating a simple web application.

## Setup

Let's get this series of post started by creating a basic app that will send back a predetermined string to the web browser. First create a new directory and cd into it.

`bash•mkdir hello-world && cd hello-world`
Once we're in there we need to create our package.json to store modules needed for our application, and store basic information about the project. We'll run the following `bash•npm init -y` which will run through the process without asking any extra questions of us, if you'd like the more verbose method remove `bash•-y` from command. We now have a package.json that looks like this:

```javascript
/* ./package.json */
{
    "name": "hello-world",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

Let's run through this line by line really quick.

- "name" is the name of the project, which is just grabbed directly from folder name.
- "version" is what version of application this is currently.
- "description" is where we put a small description of application.
- "main" is the filename of the main application file. By default this is set to index.js.
- "scripts" are where we can add things to run by typing "npm \*".
- "keywords" takes and array of strings and is used to help people find your package when uploaded to npm.
- "author" is name of person creating app.
- "license" whatever license you're releasing under. defaults to [ISC](https://opensource.org/licenses/ISC)

Next up lets install express with npm so we have access to it in our application. In the `bash•hello-world` directory type the following in terminal `bash•npm i express` . This will add express to our package.json under a new section called "dependencies". And we now have access to express and call use it in our application. Let's get started by creating our `bash•index.js` and filling with a basic application to send a message to browser when hitting the root path.

```javascript
// index.js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('root path')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
```

The run down:

- First we import the express module and assign to a `js•const` since this wont change.
- We then create a `js•const app` that calls express and gives us access to all the modules we'll need.
- `js•app.get(...` tells express to watch for a GET request on the given path, which is the first argument it takes `js•'/'` in our case. The second argument is the callback function that then tells server to send the message 'root path' back to user once the path has been hit.
- We then start up the server on port 3000 and return a console message so we know its running.

That's it for this portion of my express series. We've created a basic server that sends a message back to use when we hit the `js•'/'` path on our localhost. Easy Peasy. Up next we'll get into view rendering and some different types of engines we can use.
