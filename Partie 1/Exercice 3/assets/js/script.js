var canvas = document.getElementById('voiture'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d


  //corps de la voiture
  ctx.beginPath(); //début du chemin
  ctx.moveTo(100,50); //le tracé part du point 
  ctx.lineTo(300,50); //une ligne est ajoutée 
  ctx.lineTo(300,100);//une ligne est ajoutée 
  ctx.lineTo(350,100);//une ligne est ajoutée 
  ctx.lineTo(350,200);//une ligne est ajoutée 
  ctx.lineTo(50,200);//une ligne est ajoutée 
  ctx.lineTo(50,100);//une ligne est ajoutée 
  ctx.lineTo(100,100);//une ligne est ajoutée 
  ctx.closePath(); //fermeture du chemin
  ctx.strokeStyle = "green";//couleur du contour
  ctx.fillStyle = "green"; //couleur de remplissage
  ctx.fill(); //remplissage du dernier tracé
  ctx.stroke(); //contour du tracé

  //roue gauche de la voiture
  ctx.beginPath(); //début du chemin
  ctx.arc(70,230,30,0,Math.PI*2,true);
  ctx.closePath(); //fermeture du chemin
  ctx.strokeStyle = "grey";//couleur du contour
  ctx.stroke(); //contour du tracé
ctx.fillStyle = "lightGrey";
ctx.fill();
ctx.stroke();

//roue droite de la voiture
ctx.beginPath(); //début du chemin
ctx.arc(330,230,30,0,Math.PI*2,true);
ctx.closePath(); //fermeture du chemin
ctx.strokeStyle = "grey";//couleur du contour
ctx.stroke(); //contour du tracé
ctx.fillStyle = "lightGrey";
ctx.fill();
ctx.stroke();