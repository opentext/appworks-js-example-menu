# AppWorks Example - Auth

## Contents
1. [About appworks.js](#about-appworksjs)
2. [About this example app](#about-this-example)
3. [Usage](#usage)
4. [Installation](#installation)

## About appworks.js

appworks.js is a javascript (TypeScript) library for building feature rich, hybrid enterprise apps. The OpenText AppWorks platform provides mobile and desktop clients that support apps that utilize appworks.js.

In a mobile environment the library provides access to on-device technology, and in the desktop environment some features of the underlying host OS (operating system) are exposed.

For more information, see the appworks.js repository: https://github.com/opentext/appworks-js

## About this example

The purpose of the Menu plugin is to provide a set of methods which allows an app to populate the side menu with links, and when tapped, send the button identifier back to the app for it to handle.

## Usage

#### push

```javascript
push(menuItems: any)
```

This method allows your app to send an array of menu objects to the appworks client.
When you push a new array of menu items, the previous ones will be removed.

The object of each menu item should contain the following:
+ __title__: This will appear in the side menu, remember to translate if required.
+ __action__: This is the identifier. When tapped, this property will be returned for you to interpret

Examples
```javascript
document.addEventListener("deviceready", onDeviceReady, false);
var self = this;

function onDeviceReady() {
  initializeMenu();
}

function initializeMenu() {
  // Create an instance of Appworks.Menu on the global scope
  self.menu = new Appworks.Menu();

  // Create an array if items to send to the client
  // title: the text to appear in the menu for the item
  // action: when the item is tapped, this "action" will be returned for you to identify the action to perform
  var arr = [
    {"title" : "Hamburger", "action" : "hamburger"}
    , {"title" : "Fries", "action" : "fries"}
    , {"title" : "Nuggets", "action" : "nuggets"}
    , {"title" : "Shake", "action" : "shake"}
    , {"title" : "Donut", "action" : "donut"}
  ];

  // Send this array to the client
  self.menu.push(arr);
}
```

#### openListener

```javascript
openListener(callback: any)
```

This is where you need to register and handle the callback after Appworks.Menu.push

Examples
```javascript
// This function will be called when one of your menu items is tapped.
// You will receive the action which you passed in via Appworks.Menu.push
// Reuse self.menu from the previous example, we only want one instance of it.
self.menu.openListener(function(action) {
  doMenuAction(action);
});

function doMenuAction(action) {
  if(action == "menu_action_1") {
    alert("menu_action_1");
    return;
  }

  if(action == "menu_action_2") {
    alert("menu_action_2");
    return;
  }

  // etc
}
```

## Installation

This example app contains 3 important objects:
1. app.properties
2. icon.png
3. mobile.zip

#### app.properties
This files defines the app, with the following properties:
+ __displayName__: The display name of the app
+ __description__: A description of the app
+ __version__: The version of the app, e.g. 0.0.1 or 3.4.5 etc
+ __type__: This can be either app or desktop, or both (app,desktop)
+ __awgPlatformVersion__: The target appworks platform, this should be 16
+ __isAvailableOffline__: Allow this app to be used offline, can be true or false

#### icon.png
An icon that represents the app. This will appear in the gateway and on the device. 48x48px is ideal.

#### mobile.zip

This is your web content, such as html, js, css, images and any other assets.
The only essential file in your mobile.zip is index.html, which will be loaded by the appworks webview. Any other files or structure is up to the developer.

##### index.html

When your app is downloaded and installed in an appworks client, the client will place appworks.js, cordova.js and the cordova plugins in the root of your app.

In your html file, please include the following tags before any other javascript tags:

```html
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="appworks.js"></script>
```

#### Zipping and Deploying
1. Zip up the web content into a file named mobile.zip
2. Zip up the following files:
  + app.properties
  + icon.png
  + mobile.zip
3. Name this file in the format:
  + AppName_Version.zip
  + e.g. MyGreatApp_0.0.1.zip
  + __The version number in the filename must match the version number in app.properties__
4. Install the app on the gateway
  + Go to your gateway in a browser
  + sign in
  + go to app installation tab
  + drag and drop MyGreatApp_0.0.1.zip into the box.
  + Once fully deployed, enable the app.
