---
title: 'Javascript This'
slug: 'javascript-this'
date: '2019-02-07T15:40:37-05:00'
published: true
images:
tags:
  - 'javascript'
---

Quick notes on the `js•this` keyword in Javascript. It allows access to data within an object to be accessed without specifically passing the data through.

```javascript
var people = {} // creating empty object
people.data = ['chris', 'toni'] // adding key data with array of people

// regular function to print each name
function print(arr) {
  arr.forEach(person => {
    console.log(person)
  })
}

// printing each name using this keyword
people.print = function () {
  this.data.forEach(person => {
    console.log(person)
  })
}
```
