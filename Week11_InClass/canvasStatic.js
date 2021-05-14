const canvas = document.getElementById("staticCanvas")
const cntx = canvas.getContext('2d');

cntx.fillStyle = "darkblue";
cntx.fillRect(20, 140, 300, 300);

cntx.beginPath();
cntx.moveTo(200, 75); //x, then y
cntx.lineTo(350, 200);
cntx.lineTo(150, 100);
cntx.