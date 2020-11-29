---
slug: 'next-js-pages-and-routing'
title: 'Next.js: Pages and Routing'
date: '2019-10-06T15:29:10.415Z'
published: true
author: 'Chris Bailey'
tags:
  - 'nodejs'
  - 'react'
  - 'next'
  - 'webdev'
  - 'javascript'
---

### Adding Pages to Your Next.js App

Adding pages to a Next app with fairly simple. If we recall the directory structure from our first post on this it looked something like this:

```bash
➜ lsl
drwxr-xr-x    - chris 28 Sep 23:38 components
drwxr-xr-x    - chris 28 Sep 23:38 node_modules
.rw-r--r--  262 chris 28 Sep 23:38 package.json
drwxr-xr-x    - chris 28 Sep 23:38 pages
drwxr-xr-x    - chris 28 Sep 23:38 static
.rw-r--r-- 238k chris 28 Sep 23:38 yarn.lock
```

The relevant part of this for creating pages is... The pages directory. In Next if we add a component into the pages directory that has a default export it will automatically create a route for that in our project. Lets go ahead and create our first new page in the project. We'll start with an about page, so we will create `js•pages/about.js` and add in the following code:

```jsx
import React from 'react'
import Nav from '../components/nav'

const About = () => (
  <>
    <Nav />
    <h3>About</h3>
    <p>
      Dolor veniam quidem debitis sequi corporis eveniet? Veniam delectus porro
      doloremque eos similique. Cumque laudantium mollitia aspernatur amet
      ipsam! Consequuntur.
    </p>
  </>
)

export default About
```

Easy right? We created a pretty standard functional component that returned JSX as we would in any React component, and now when we run `js•yarn dev` and goto `js•localhost:3000/about` we can see the component we just created has its own route and page. Next has a bit of magic in this area as all we're doing is dropping in components and pages are being automatically created and redered for us on the server side.

### Moving Around Next.js Pages
