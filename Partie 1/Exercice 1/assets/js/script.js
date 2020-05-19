
    var canvas = document.getElementById('home'); //déclarer la variable canvas avec l'id du canvas dans le html
    var ctx = canvas.getContext('2d'); //déclarer la variable avec le contexte - ici en 2d
    
    // toit de la maison
    ctx.beginPath(); //début du chemin
    ctx.moveTo(50,50); //le tracé part du point 50, 50
    ctx.lineTo(80,80); //une ligne est ajoutée 
    ctx.lineTo(20,80);
    ctx.closePath(); //fermeture du chemin
    ctx.strokeStyle = "orange"; // couleur du contour 
    ctx.fillStyle = "orange"; //couleur de remplissage
    ctx.fill(); //remplissage du  tracé
    ctx.stroke(); //contour du tracé

    
    //Corps de la maison
    ctx.beginPath(); //début du chemin
    ctx.moveTo(20,80); //le tracé part du point 50, 50
    ctx.lineTo(20,140); //une ligne est ajoutée 
    ctx.lineTo(80,140);//une ligne est ajoutée 
    ctx.lineTo(80,80);//une ligne est ajoutée 
    ctx.closePath(); //fermeture du chemin
    ctx.strokeStyle = "lightBlue";//couleur du contour
    ctx.fillStyle = "lightblue"; //couleur de remplissage
    ctx.fill(); //remplissage du dernier tracé
    ctx.stroke(); //contour du tracé

    //Porte de la maison
    ctx.beginPath(); //début du chemin
    ctx.moveTo(35,140); //le tracé part du point 50, 50
    ctx.lineTo(35,110); //une ligne est ajoutée 
    ctx.lineTo(65,110);//une ligne est ajoutée
    ctx.lineTo(65,140)//une ligne est ajoutée
    ctx.closePath();//fermeture du chemin
    ctx.strokeStyle = "lightGrey"; //couleur du contour
    ctx.fillStyle = "lightgrey"; //couleur de remplissage
    ctx.fill(); //remplissage du dernier tracé
    ctx.stroke(); //contour du tracé

    //Fenêtre gauche de la maison
    ctx.beginPath(); //début du chemin
    ctx.moveTo(23,90); //le tracé part du point 50, 50
    ctx.lineTo(28,90); //une ligne est ajoutée 
    ctx.lineTo(28,95);//une ligne est ajoutée
    ctx.lineTo(23,95)//une ligne est ajoutée
    ctx.closePath();//fermeture du chemin
    ctx.strokeStyle = "lightGrey"; //couleur du contour
    ctx.fillStyle = "lightgrey"; //couleur de remplissage
    ctx.fill(); //remplissage du dernier tracé
    ctx.stroke(); //contour du tracé

    //Fenêtre droite de la maison
    ctx.beginPath(); //début du chemin
    ctx.moveTo(67,90); //le tracé part du point 50, 50
    ctx.lineTo(72,90); //une ligne est ajoutée 
    ctx.lineTo(72,95);//une ligne est ajoutée
    ctx.lineTo(67,95)//une ligne est ajoutée
    ctx.closePath();//fermeture du chemin
    ctx.strokeStyle = "lightGrey"; //couleur du contour
    ctx.fillStyle = "lightgrey"; //couleur de remplissage
    ctx.fill(); //remplissage du dernier tracé
    ctx.stroke(); //contour du tracé


