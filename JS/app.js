function rendreVisible(){
  let x = document.getElementById("DivRisitas")
  let y = document.getElementById("DivRisific")
  if(x.style.display === "none" , y.style.display === "block" ){
    x.style.display = "block";
    y.style.display = "none";
  }
}

function rendreInvisible(){
  let x = document.getElementById("DivRisitas")
  let y = document.getElementById("DivRisific")
  if(x.style.display === "block" , y.style.display === "none" ){
    x.style.display = "none";
    y.style.display = "block";
  }
}

function Cacher(){
  let D = document.getElementById("A-DROITE")
  let G = document.getElementById("A-GAUCHE")
  let B = document.getElementById("Cacher-D")
  let A = document.getElementById("Afficher-D")
  
  if(G.style.visibility = "visible" , D.style.visibility = "visible" , B.style.display = "block" , A.style.display = "none" ){
    D.style.visibility = 'hidden';
    G.style.visibility = 'visible';
    B.style.display = 'none';
    A.style.display = 'block';

    
    G.style.width = "100%";
    D.style.width = "0%";
  }
}

function Afficher(){
  let D = document.getElementById("A-DROITE")
  let G = document.getElementById("A-GAUCHE")
  let B = document.getElementById("Cacher-D")
  let A = document.getElementById("Afficher-D")
  
  if(G.style.visibility = "visible" , D.style.visibility = "visible" , B.style.display = "none" , A.style.display = "block" ){
    D.style.visibility = 'visible';
    G.style.visibility = 'visible';
    B.style.display = 'block';
    A.style.display = "none";

    G.style.width = "50%";
    D.style.width = "50%";

  }
}
 



