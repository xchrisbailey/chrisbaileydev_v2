---
slug: 'react-events'
title: 'React: Events'
date: '2019-05-14T16:19:05.702Z'
published: true
author: 'Chris Bailey'
tags:
  - 'react'
  - 'javascript'
  - 'nodejs'
  - 'webdev'
---

Handling events in React is very similar to how we would handle them on the DOM. There are a few syntactic difference and we'll go over a few important ones here. One main difference you'll notice is the use of camelcase as opposed to all lowercase like when dealing with DOM.

### Keyboard

- _onKeyDown_ will be called when a key is depressed
- _onKeyPress_ is called when a key is released but before _onKeyup_
- _onKeyUp_ is called at end after _onKeyPress_

### Focus

- _onBlur is called when a target loses focus_
- _onFocus_ is called when a target receives focus

### Form

- _onChange_ is called when a form control changes the value
- _onInput_ Identical to _onChange_ and is preferred of two.
- _onSubmit_ is a special prop for `js•<form>` elements that is called when a `js•<button type="submit">` is pressed or return is hit within a field.

### Mouse

- _onClick_ mouse button press and release.
- _onMouseUp_ called after _onClick._
- _onMouseOver_ called when the mouse moves directly over an element.
- _onMouseEnter_ called when the mouse moves over an element or its children.

### Example form usage

Basic form controls:

```javascript
import React, { useState } from 'react'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // send email code
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setEmail(e.target.value)}
        value={email}
        placeholder="enter email"
      />
      <input
        type="text"
        onChange={e => setMessage(e.target.value)}
        value={message}
        placeholder="Enter a message"
      />
      <button>Send</button>
    </form>
  )
}
```

We use `js•onChange` to update our state every time the input for the associated item is changed, and `js•onSubmit` to execute whatever code we need to send off the message form and then clear the state and input values.
