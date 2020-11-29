---
slug: 'javafx-with-java-11-and-intellij-idea'
title: 'JavaFX with Java 11 and IntelliJ IDEA'
date: '2020-06-06T22:59:29.223Z'
published: true
excerpt: 'setting up IntelliJ IDEA for JavaFX development using JDK 11'
author: 'Chris Bailey'
tags:
  - 'java'
  - 'dev'
  - 'education'
---

JavaFX has no longer come bundled with the JDK as of version 11. To use it at this point we're going to need to download the JavaFX sdk separately and add a few tweaks in our editor of choice (IntelliJ IDEA for purposes of this post).

## 🎨 Downloading JavaFX sdk

To download the SDK head on over to [https://gluonhq.com/products/javafx/](https://gluonhq.com/products/javafx/) and grab the appropriate SDK for your operating system. I'm on macOS so I will be downloading the `java•JavaFX Mac OS X SDK` if you're on Windows you'll grab Windows SDK, and for Linux the Linux SDK, easy enough.

![sdk_download](sdk_download.png)

Now that we have a zip file, once expanded we should have a folder name `java•javafx-sdk-11.0.2` we're going to want to move this someplace on our system that we can easily find, in my case, I have a `java•Dev` folder in my home directory and inside of there, I have another folder named `java•lib` this is where my JavaFX sdk resides.

## 🖌 Configuring IntelliJ for JavaFX use

Once we have our SDK extracted and placed in a convenient location on our filesystem we'll need to setup up IntelliJ to use it. From the launch screen, we're going to open up the `java•project structure` settings and head to the global modules section. Click on the `java•+` to add a new module, click the Java option, and navigate to your SDK location in my case `java•home_dir > Dev > lib > javafx-sdk-11.0.2` then head into the `java•lib` folder and select all of the `java•.jar` files and click open. From here we can rename this to something a bit easier to understand; I went with JavaFX 11.

![001_global_lib_javafx](./001_adding_sdk_to_intellij.gif)

## 🖼 Creating a new JavaFX project

When creating a new JavaFX project follow the same steps as you would for any project in IntelliJ, but instead of selecting `java•Java` as the type, we should now have the option to pick a `java•Java FX` type for the project. This will set us up with a fairly simple boilerplate, and almost have us ready to start creating some amazing GUI applications in Java.

![002_creating_javafx_application](002_creating_java_fx_application.gif)

### 👨‍🎤 Adding JavaFX to the project modules.

You'll probably notice that we have some errors in our newly created project. These are easy to fix with a couple of steps (that will need to be repeated for any Java 11 project you want to use JavaFX with) the first of which is to add the modules to our project. Head over to the `java•Project Structure` options `java•CMD + ;` or `java•file > project structure` , ensure you are using java 11 and have language level also set to 11. Next head to Global Libraries, right-click the JavaFX library, select `java•Add to Modules` and click `java•ok` once confirming it is being added to the appropriate project.

![003_adding_javafx_to_project_modules](003_adding_javafx_sdk_to_project.gif)

### 👩‍🎤 Creating a module-info.java file

The final step to get us off and running is the creation of a `java•module-info.java` file. Right-click the `java•src` directory, select new and click `java•module-info.java` we'll now have this file under our `java•src` directory. Open it up and replace the content with the following.

```java
module JavaFX.Demo {
    requires javafx.fxml;
    requires javafx.controls;

    opens sample;
}
```

![004_creating_modules_file](004_creating_module_info.gif)

👩‍🎨 Now We Create
