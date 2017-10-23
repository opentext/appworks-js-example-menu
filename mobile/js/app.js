document.addEventListener("deviceready", onDeviceReady, false);
var self = this;

/**
 * Called when AppWorks is ready
 */
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

  // When an item is tapped, this will be called
  self.menu.openListener(function(action) {
    updateImage(action);
  });
}

function updateImage(imageName) {
  var imageObject = document.getElementById("image");
  var imageSource = "img/"+imageName+".jpg";
  imageObject.src = imageSource;
}
