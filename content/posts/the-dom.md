---
title: 'The DOM'
slug: 'the-dom'
date: '2019-02-07T16:00:12-05:00'
published: true
images:
tags:
  - 'javascript'
  - 'html'
  - 'css'
---

> The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
>
> \- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

The DOM is the interface between our css/html and javascript. It allows us to change things with the use of javascript. Everything lives inside of the one object, the "document".

![dom_graph](./dom_graph.gif)

Selecting an element is easily accomplished using `js•document.querySelector()` which will select the given input, say a `js•<p>` tag. From there we have the ability to manipulate it by first saving the selection to a variable and then using dot notation to call on styles like so: `js•p.style.color = "red";` which takes a variable `js•p` that we assigned with `js•document.querySelector("p")` and changes the css style "color" to red.

### First Five Methods

`js•document.getElementById()`
: returns and element by its ID.

`js•document.getElementsByClassName()`
: returns all elements matching a given class name

`js•document.getElementsByTagName()`
: returns all elements of the matching tag name.

`js•document.querySelector()`
: returns the first matching occurrence of the given CSS selector

`js•document.querySelectorAll()`
: returns all matching occurrences of the given CSS selector

## Manipulating Styles, Text/Content, Attributes

### Styles

We have access to the style property through the DOM, which allows us to add, change or remove style properties of a given element. A few easy examples of changing styles:

```javascript
var name = document.getElementById('name')

name.style.color = 'red'
name.style.border = '1px solid black'
name.style.fontSize = '16px'
name.style.background = 'black'
```

classList gives us the ability to add, delete or toggle a new class on to an element. We could create a new class in our css that sets the text size to 50 with a black background and white text, and through javascript add that unassigned css class to any element we would like.

```css
/* CSS FILE */

.standOut {
  font-size: 50px;
  color: white;
  background: black;
}
```

```javascript
// JAVASCRIPT FILE

var so = docutment.getElementById('name')

// add the class .standOut to the item with ID of "name"
so.classList.add('standOut')
// removes class standOut to the item with ID of "name"
so.classList.remove('standOut')
// add class if does not exist or remove if class exists
so.classList.toggle('standOut')
```

### Text and Content

`js•.textContent` method allows us to change the text inside of and element. We for example can select a `js•<p>` with `querySelector("p")` and store in a var that gives use access to the text contained inside from which we can read the existing text or replace with new text. Caution needs to be used as setting new text with `js•.textContent` will no preserve any html or content with in the selected element. Adding content through this method will also not allow the input of html elements, they will be escaped.

`js•.innerHTML` is like `js•.textContent` except it will return a string with all the html contained in the provided element. Setting content this way provides the same problem we have with `js•.textContent` , no inner html content will be preserved when we add new content. When adding new content through this method we have the ability to use html in the new content unlike `js•.textContent` .

### Attributes

`js•.getAttribute()` and `js•.setAttribute()` allow us to read and write attributes like `js•href` or `js•src` .

```html
<a href="www.google.com">I'm a link</a> <img src="logo.png" />
```

```javascript
var link = document.querySelector('a')
link.getAttribute('href') // www.google.com

// change href
link.setAttribute('href', 'http://yahoo.com')
```

## Events

> DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.
>
> \- [MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

Events are notifications that are sent when things happen like key clicks, mouse clicks, button clicks, etc. We use them by attaching an event listener to a set element, and from there we can launch other processes through javascript once the event notification has been triggered. A common listener is `js•element.addEventListener(type, functionToCall);` .

```javascript
var button = document.querySelector('button')
button.addEventListener('click', function () {
  console.log('THE BUTTON HAS BEEN CLICKED!')
})
```

The above code sends a console message once the button we've selected has been clicked. Named functions can also be used in place of an anonymous function, most of the time an anonymous function will be preferred, but some situations may arise where there is a function used in multiple places where a named function would be preferred over an anonymous one.

Some common addEventListener types:

- click
- mouseover
- mouseout
- keydown
- keypress
- keyup
- focus
- blur
- change
- submit
- scroll
- resize
- load
