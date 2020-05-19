var canvas = document.getElementById('iceCream'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d


  //glace
  ctx.beginPath(); //début du chemin         
  ctx.moveTo(150,200); // point de départ
  ctx.bezierCurveTo(150,200,250,0,300,200); //dessine la ligne curve
  ctx.closePath(); //fermeture du chemin
  ctx.fillStyle="red"; //remplissage de la forme en second
  ctx.fill(); //forme
  ctx.strokeStyle="red"; //couleur du contour en 1er
  ctx.stroke(); //contour du tracé

  //cornet
  ctx.beginPath(); //début du chemin
  ctx.moveTo(150,200);// point de départ
  ctx.lineTo(300,200);
  ctx.lineTo(225,350);
  ctx.lineTo(150,200);
  ctx.closePath(); //fermeture du chemin
  ctx.strokeStyle = "orange";//couleur du contour
  ctx.stroke(); //contour du tracé
  ctx.fillStyle = "orange"; // remplissage de la forme
  ctx.fill();
  ctx.stroke();

