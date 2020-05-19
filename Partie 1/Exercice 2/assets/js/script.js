var canvas = document.getElementById('maison'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d

ctx.fillStyle = "blue";
ctx.fillRect(10,60,180,200);

ctx.fillStyle = "grey";
ctx.fillRect(30,80,40,40);

ctx.fillStyle = "grey";
ctx.fillRect(130,80,40,40);

ctx.fillStyle = "grey";
ctx.fillRect(80,180,50,80);

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(10,60);
ctx.lineTo(190,60);
ctx.lineTo(100,0);
ctx.closePath();
ctx.fill();
