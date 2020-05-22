var canvas = document.getElementById('chanel'); //déclarer la variable canvas avec l'id du canvas dans le html
var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d


  //premier C
  ctx.beginPath(); //début du chemin
  ctx.lineWidth = 20; //épaisseur de la ligne
  ctx.strokeStyle = "black";//couleur de la ligne
  ctx.arc(250,100,70,0.75,1.75*Math.PI,false); //défini l'arc de cercle
  ctx.stroke(); //traçage de la ligne

  //deuxième C
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "black";
  ctx.arc(150,100,70,2.5,5.2*Math.PI,true);
  ctx.stroke();

  //texte Chanel
    ctx.font = '80px arial';
    ctx.fillText('CHANEL',50,250)







