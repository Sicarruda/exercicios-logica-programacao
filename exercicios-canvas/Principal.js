var tela = document.getElementById("tela");
var c = tela.getContext("2d");
c.fillStyle="grey";
c.fillRect(0,0,200,400);
c.fillStyle="red";
c.fillRect(400,0,200,400);
c.fillStyle="green";
c.beginPath();
c.moveTo(300,200);
c.lineTo(200,400);
c.lineTo(400,400);
c.fill();
c.fillStyle="blue";
c.beginPath();
c.arc(300, 200, 50, 0, 2*Math.PI);
c.fill();
//
c.fillStyle="yellow";
c.fillRect(0,0,600,200);
c.fillStyle="blue";
c.fillRect(0,200,600,300);
c.fillStyle="red";
c.fillRect(0,300,600,400);
//
c.fillStyle="red";
c.fillRect(200,0,600,200);
c.fillStyle="green";
c.fillRect(200,200,600,300);
c.fillStyle="white";
c.fillRect(0,0,100,400);
//
c.fillStyle="red";
c.fillRect(0,0,600,125);
c.fillStyle="green";
c.fillRect(0,275,600,150);
c.fillStyle="blue";
c.beginPath();
c.arc(300, 200, 70, 0, 2*Math.PI);
c.fill();
//
c.fillStyle="red";
c.fillRect(0,0,150,150);
c.fillStyle="red";
c.fillRect(0,250,150,400);
c.fillStyle="blue";
c.fillRect(175,0,50,400);
c.fillStyle="blue";
c.fillRect(0,175,600,50);
c.fillStyle="red";
c.fillRect(250,0,600,150);
c.fillStyle="red";
c.fillRect(250,250,600,400);
//
c.fillStyle="green";
c.fillRect(0,0,600,400);
c.fillStyle="yellow";
c.beginPath();
c.moveTo(300,0);
c.lineTo(600,200);
c.lineTo(300,400);
c.lineTo(0,200);
c.fill();
c.fillStyle="blue";
c.beginPath();
c.arc(300, 200, 100, 0, 2*Math.PI);
c.fill();