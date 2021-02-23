var myFooter = document.getElementById("footer1");
var fColorChangeButton = document.getElementById("footerControlButton");


myFooter.style.color="black";


var myFooterColorChange = function () {
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;
    myFooter.style.backgroundColor =
      "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
  };

  //just when the JS loads
myFooterColorChange();
//when the button is clicked
fColorChangeButton.addEventListener("click", myFooterColorChange);