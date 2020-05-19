var canvas = document.getElementById('soucoupe'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d


  //soucoupe volante cockpit
  ctx.beginPath(); //début du chemin         
  ctx.moveTo(160,180); // point de départ
  ctx.bezierCurveTo(160,180,200,60,240,180); //courbe du cockpit
  ctx.closePath(); //fermeture du chemin
  ctx.fillStyle="white"; //remplissage de la forme en second
  ctx.fill(); //forme
  ctx.strokeStyle="white"; //couleur du contour en 1er
  ctx.stroke(); //contour du tracé

  //soucoupe volante socle
  ctx.beginPath(); //début du chemin         
  ctx.moveTo(100,200); // point de départ
  ctx.bezierCurveTo(100,200,200,100,300,200);
  ctx.bezierCurveTo(300,200,200,300,100,200);
  ctx.closePath(); //fermeture du chemin
  ctx.fillStyle="white"; //remplissage de la forme en second
  ctx.fill(); //forme
  ctx.strokeStyle="white"; //couleur du contour en 1er
  ctx.stroke(); //contour du tracé

