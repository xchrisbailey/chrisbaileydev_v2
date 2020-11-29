---
slug: 'react-react-router'
title: 'React: React Router'
date: '2019-04-27T20:55:57.915Z'
published: true
author: 'Chris Bailey'
tags:
  - 'javascript'
  - 'react'
  - 'webdev'
---

### What is React Router?

React router is a set of components with the purpose of allowing you to move around the application easily and 'dynamically'.

**What is dynamic routing?**

> "When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router." [React Router Docs](https://reacttraining.com/react-router/core/guides/philosophy)

Getting started is fairly straight forward, at the top of the app we'll render the router:

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
```

This now gives us access to the router throughout our app and can be used like so in the following pages:

```jsx
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/about">About</Link>
  </div>
  <div>
    <Route path="/about" component={AboutPage} />
  </div>
)

export {Nav as default }
```

In this easy example, we have a working link that will route us to an about page linked to the AboutPage component.

---

### A more workable file structure

So obviously dumping all of this into our App.js file would work, but things could get out of hand quickly and add a bunch of code we don't really need in that file, so lets discuss how we can move it out and a couple of things we'll need to add to keep our routes working effectively.

We're going to move most of our route logic into a file named AppRouter.js in a router folder.

```jsx
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import AboutPage from '../components/AboutPage.js'
import HelpPage from '../components/HelpPage.js'

const AppRouter = () => (
  <div>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/help" componend={HelpPage} />
    </Switch>
  </div>
)

export { AppRouter as default }
```

Here we've added a little something different than in our first example. The `js•<Switch>` tags which will dig through the routes and find the matching one without rendering any additional routes. Now we've created a single file that contains all of our routes and can be imported into any our components and used directly like so.

```jsx
...
import AppRouter from './routers/AppRouter';

const App = () => (
    <div>
        <AppRouter />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
```

We now have the ability to hit the created routes with the Link component from react-router-dom.

---

### Extra useful bits

`js•<Redirect />` exist to help us add more use cases to our routes. Like checking if someone has permission to view a route, and redirecting elsewhere if they are not authorized. Usage would look something like this:

```jsx
import {Route, Redirect} form 'react-router-dom';
<Route path="/user" render={
    () => (
        isLoggedIn ? (
            <EditUserPage />
        ) : (
            <Redirect to="/" />
)}
```

This calls the isLoggedIn function we've defined elsewhere, and if returns true sends us to the edit user component, else we are redirected back to the root path.

`js•<NavLink>` keeps all the functionality of the `js•<Link>` component, but adds the ability to specify a CSS class to add when the current route matches the route on given in the tag:

```jsx
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <NavLink to="/" activeClassName="active">
    Home
  </NavLink>
)
```

When we are at the root path of our project the NavLink with its matching path will have the CSS class of 'active' added to it giving us easy access to style it accordingly.
