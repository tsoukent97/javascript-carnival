  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.onkeydown = checkKey;

function checkKey(e) {
    if (e.keyCode == '38') {
        //up arrow
        changeVertical(-1)
    }
    else if (e.keyCode == '40') {
        // down arrow
        changeVertical(1)
    }
    else if (e.keyCode == '37') {
       // left arrow
       changeHorizontal(-1)
    }
    else if (e.keyCode == '39') {
       // right arrow
       changeHorizontal(1)
    }
}

var indexes = [0, 0, 0]
var mainIndex = 0

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

var imgs = [head, body, shoes]
var strings = ["head", "body", "shoes"]

function changeHorizontal(shift) {

  var index = indexes[mainIndex]
  var image = imgs[mainIndex]
  var str = strings[mainIndex]

  index += shift 

  if (index < 0)
    index = 5

  if (index > 5)
    index = 0

  image.src = "./images/" + str + index + ".png"

  indexes[mainIndex] = index 
  }

//   if (mainIndex == 1) {
//     bodyIndex += shift 
//   if (bodyIndex < 0)
//     bodyIndex = 5

//   if (bodyIndex > 5)
//   bodyIndex = 0

//   body.src = "./images/body" + bodyIndex + ".png"
//   }

//   if (mainIndex == 2) {
//     feetIndex += shift 
//   if (feetIndex < 0)
//     feetIndex = 5

//   if (feetIndex > 5)
//     feetIndex = 0

//   shoes.src = "./images/shoes" + feetIndex + ".png"
//   }
// }
  
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0)
    mainIndex = 2

  if (mainIndex > 2)
    mainIndex = 0
}

