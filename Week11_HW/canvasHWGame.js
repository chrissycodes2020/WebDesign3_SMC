const canvas = document.getElementById("myGame");
const ctx = canvas.getContext('2d');

    let cWidth = canvas.width;
    let cHeight = canvas.height;

    let cPosX = cWidth/2; //horizontal center
    let cPosY = cHeight/2; //vertical center

    let cVelX = 2;
    let cVelY = 1;

    let cRadius = 75;

    let ballColor = "rgb(0, 0, 0)";

    let randomColor = function (){

        let randR = Math.random()*255;
        let randG = Math.random()*255;
        let randB = Math.random()*255;

        let colValue = "rgb(" + randR + ", "+ randG +" , " + randB + ")";
        return colValue;
    }
    




    function drawFrame(){
        ctx.clearRect(0, 0, cWidth, cHeight);

        ballColor = randomColor();

        ctx.fillStyle = ballColor; // define as #ff0ce2 , rgb(), "wheat"
        ctx.strokeStyle = "green";
    
        ctx.beginPath();
        ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
            cVelX = cVelX * -1; // reverse the horizontal direction 
        }

        if(cPosY + cRadius  >= cHeight || cPosY - cRadius <= 0) {
           cVelY = cVelY * -1;
        }

        cPosX = cPosX + cVelX; // change position by velocity
        cPosY = cPosY + cVelY; //

        window.requestAnimationFrame(drawFrame);

    }

    drawFrame();


    canvas.addEventListener("click", function(event){
        //console.log(event);
        let mouseXp = event.pageX - event.target.offsetLeft;
        let mouseYp = event.pageY - event.target.offsetTop;

        //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);

        let distX = Math.abs(cPosX - mouseXp);
        let distY = Math.abs(cPosY - mouseYp);

        if(distX < cRadius && distY < cRadius){
            console.log("Hit!!");
            cVelX = cVelX * 1.5;
            cVelY = cVelY * 1.5;
        }
    })

    

        //new code

    let count = 0;

    document.getElementById('myGame').addEventListener('click', () => {
        count++;
        document.getElementById('score').innerText = count;
    });



    
