---
slug: 'java:-inheritance-polymorphism-and-abstracts'
title: 'Java: Inheritance, Polymorphism and Abstracts'
date: '2020-05-27T19:25:49.223Z'
published: true
excerpt: 'quick run down of polymorphism, inheritance and abstract classes and methods in Java.'
author: 'Chris Bailey'
tags:
  - 'java'
  - 'college'
  - 'dev'
---

### 👨‍👩‍👦 Inheritance

In Java inheritance is the relationship between classes that allow the passing of data and functionality between them. Java only deals in single inheritances, meaning you can only inherit from one other class. However, you can have multiple interfaces. There are numerous terms for these relationships, the ones you'll hear most in Java is superclass and subclass. Every object in Java is derived from the parent Object class, and any class can be a superclass. By using the keyword `java•final` in the definition you can prevent a class from being a superclass. All fields and methods of the superclass are inherited unless marked `java•private`, we can use getters and setters to expose private fields or methods. Using the `java•@Override` annotation helps with readability and improves the compilers ability to catch errors.

```java
// create Item class
public class Item {
    // directly inaccessible to subclasses
    private string type;

    // getter - exposes type for viewing
    public String getType() {
        return type;
    }

    // setter - exposes type for setting
    public void setType(String type) {
        this.type = type;
    }
}

// create DogFood class that extends Item.  superclass = Item, subclass = DogFood
public class DogFood extends Item {

    // Overriding superclass getType method to return "Dog food"
    @Override
    public String getType() {
        return "Dog Food";
    }
}
```

### 👴 Polymorphism

Polymorphism allows subclasses to be both themselves and the superclass they are inheriting from. They will have the ability to call available methods from the superclass, subclass methods are given access to arguments via `java•super()`, and can pass instances of subtypes.

```java
// create class Item (our super class)
public class Item {
    // initialize some private fields
    private String name;
    private String kind;

    // create a constructor for the two available fields
    public Item(String name, String kind) {
        this.name = name;
        this.kind = kind;
    }

    // getters and setters for both name and kind
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }
}

// create our subclass "DogFood" that uses the 'extends' keyword to bring in Item class.
public class DogFood extends Item {
    // set up the subclass constructor that calls into superclass and sets the kind field.
    public DogFood(String name) {
        super(name, "Dog Food");
    }
}
```

### 🎨 Abstract Classes & Methods

Abstract classes can not be instantiated, this be done through subclasses. Similarly, Abstract methods have no implementation, are described only by their signature, and must be implemented through the subclass.

```java
// class delcared w/ abstract keyword.
// Item item = new Item("hi", "hi") - will no longer work
public abstract class Item {
    private String name;
    private String kind;

    public Item(String name, String kind) {
        this.name = name;
        this.kind = kind;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    // method delcared with `abstract` must be delcared in subclasses
    public abstract double getPrice();
}

// subclass that extends the abstract Item class
// now have access to Item class by way of DogFood class
// DogFood kibble = new DogFood("chicken", 25);
public class DogFood extends Item {
    private double price;

    public DogFood(String name, double price) {
        super(name, "Dog Food");
        this.price = price;
    }

    // implement getPrice() abstract method from Item class
    // kibble.getPrice(); -> 25,00
    @Override
    public double getPrice() {
        return this.price;
    }
}
```
