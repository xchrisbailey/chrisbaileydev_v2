---
title: 'Javascript Arrays'
slug: 'javascript-arrays'
date: '2019-02-05T17:18:50-05:00'
published: true
images:
tags:
  - javascript
---

> The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.
>
> -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

A method for grouping like objects, numbers, strings, etc together.

```javascript
// with out array
var friend1 = 'chris'
var friend2 = 'addy'
var friend3 = 'toni'
var friend4 = 'mallick'

// with array
var friends = ['chris', 'addy', 'toni', 'mallick']
```

Like characters in a string, arrays are indexed starting at zero. Accessing friend 1 in our friends array is as simple as `js•friends[0]` which will pull out the first item in the array which is **chris**. The method for changing an item is the same `js•friends[0] = "christopher"` which now returns **christopher** when called.

Adding data to the array follows same method, we will just need to add an additional index.

```javascript
friends //["christopher", "addy", "toni", "mallick"]
friends.length() //4
friends[4] = 'bob'
friends //["christopher", "addy", "toni", "mallick", "bob"]
```

### A few important array methods

Removing and adding elements to an array is far easier than finding the size and adding via a defined new index. The function `js•Array.push()` adds a new elements to the end of the array. On the opposite end the `js•Array.pop()` method removes and returns the last item in the array.

Similar to Push and Pop we have `js•Array.unshift()` and `js•Array.shift()` . unshift will add an item to the beginning of the array, and shift will remove and return the first item in the array.

`js•Array.indexOf()` will attempt to find the index of a provided input. It will return index of first occurrence of the asked for item if it exists. If it does not exist with in the array a value of -1 will be returned. This can be used as a method to check if something exists in the array.

`js•Array.slice()` takes two indexes and will return a new array with items founds with in the provides indexes. Using slice with out any start or end points will copy the entire array.

```javascript
var dogs = ['Border Collie', 'Shiba']

// push and pop
dogs.push('Goldendoodle') // ["Border Collie", "Shiba", "Goldendoodle"]
dogs.push('Mutt') // ["Border Collie", "Shiba", "Goldendoodle", "Mutt"]
dogs.pop() // "Mutt"
dogs // ["Border Collie", "Shiba", "Goldendoodle"]

// shift and unshift
dogs.unshift('Labrador') // ["Labrador", "Border Collie", "Shiba", "Goldendoodle"]
dogs.shift() // "Labrador"
dogs // ["Border Collie", "Shiba", "Goldendoodle"]

// indexOf
dogs.indexOf('Shiba') // 1
dog.indexOf('Great Dane') // -1

// slice
dogs.unshift('Collie', 'Bearded Collie') // ["Collie", "Bearded Collie" "Border Collie", "Shiba", "Goldendoodle"]
var collies = dogs.slice(0, 3)
collies // ["Collie", "Bearded Collie", "Border Collie"]
```

### Nesting arrays

Arrays are also capable of containing other arrays. This is pretty straight forward, but I wanted to add it in just for reference. Grabbing items from is very similar just with the added index of the grabbed array.

```javascript
var vehicles = [
  ['Ford', 'GM'],
  ['Subaru', 'Toyota'],
  ['Volkswagen', 'BMW'],
] // [["Ford", "GM"],["Subaru", "Toyota"],["Volkswagen", "BMW"]]

vehicles[1][0] // "Subaru"
```

### Array Iteration

Going through an array has a few options be it a for loop or using forEach. Doing this allows us to for example go over every comment on a blog post and add in html styling for each to fit the looks of the page rather than adding in raw text.

`js•for` loop is simple and just involves using the `js•.length()` method on the given array

```javascript
var friends = ['joe', 'bob', 'sam', 'chuck']

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i])
}
```

`js•Array.forEach(someFunction)` provides an easy built in way to work through an array.

```javascript
var friends = ['joe', 'bob', 'sam', 'chuck']

friends.forEach(function (friend) {
  console.log(friend)
})

// or with =>
friends.forEach(friend => {
  console.log(friend)
})
```

### Deleting single item by index

`js•.splice()` method is used for deleting a single+ items from an array based off the given index. It takes two arguments first is the index to start at, and second is how many indexes to remove (for one "1", two "2", etc).

```javascript
var people = ['chris', 'toni', 'cody', 'amanda', 'patty', 'gary']

people.splice(2, 1) // removes item starting at index 2. "cody"
people.splice(2, 2) // removes 2 items starting at index 2. "amanda", "patty".
```
