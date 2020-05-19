var canvas = document.getElementById('bonhomme'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d


  //tête
  ctx.beginPath();
  ctx.arc(200,75,50,0,Math.PI*2,true);
  ctx.strokeStyle = "#AF7817"; // couleur contour
  ctx.fillStyle = "#AF7817"; // couleur remplissage
  ctx.fill();
  ctx.stroke();
  
    // Yeux
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle="white";
    ctx.arc(218,60,7,0,Math.PI*2,false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle="white";
    ctx.arc(185,60,7,0,Math.PI*2,false);
    ctx.fill(); 
    ctx.stroke();

    // sourcils
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(185,45,4,0,Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(218,45,4,0,Math.PI,true);
    ctx.stroke();

    //bouche 
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.bezierCurveTo(175,90,212,95,225,90);
    ctx.bezierCurveTo(225,90,212,120,175,90);
    ctx.stroke();

    //bras 
    ctx.beginPath();
    ctx.strokeStyle = "#AF7817";
    ctx.fillStyle="#AF7817";
    ctx.moveTo(85,120);
    ctx.lineTo(300,120);
    ctx.bezierCurveTo(300,120,330,130,300,140);
    ctx.lineTo(300,140);
    ctx.lineTo(85,140);
    ctx.bezierCurveTo(85,140,55,130,85,120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //tronc
    ctx.beginPath();
    ctx.strokeStyle = "#AF7817";
    ctx.fillStyle="#AF7817";
    ctx.moveTo(155,135);
    ctx.lineTo(155,280);
    ctx.lineTo(245,280);
    ctx.lineTo(245,135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  
    //jambe gauche entrejambe et jambe droite
    ctx.beginPath();
    ctx.strokeStyle = "#AF7817";
    ctx.fillStyle="#AF7817";
    ctx.moveTo(155,280);
    ctx.lineTo(155,380);
    ctx.bezierCurveTo(155,380,170,400,185,380);
    ctx.lineTo(185,380);
    ctx.lineTo(185,310);
    ctx.bezierCurveTo(185,310,200,285,215,310);
    ctx.lineTo(215,310);
    ctx.lineTo(215,380);
    ctx.bezierCurveTo(215,380,230,400,245,380);
    ctx.lineTo(245,380);
    ctx.lineTo(245,280);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //boutons violets
    ctx.beginPath();
    ctx.strokeStyle = "#800080";
    ctx.fillStyle="#800080";
    ctx.arc(200,190,7,0,Math.PI*2,false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#800080";
    ctx.fillStyle="#800080";
    ctx.arc(200,160,7,0,Math.PI*2,false);
    ctx.fill(); 
    ctx.stroke();






