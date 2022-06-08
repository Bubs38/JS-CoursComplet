const inputsCouleur = document.querySelectorAll('.inp-couleur');
const inputRange = document.querySelector('.inp-range');
const btns = document.querySelectorAll('button');
const fond = document.body;
const containerCouleur = document.querySelector('.container-couleur');
const span = document.querySelector('span');
const btnRandom = document.querySelector('.random');

// Initialisation
let valCouleur =['#BA5370', '#F4E2D8'];
let inclinaison = 45;
let index = 3;

inputsCouleur[0].value  = valCouleur[0];
inputsCouleur[1].value  = valCouleur[1];
inputsCouleur[0].style.background = valCouleur[0];
inputsCouleur[1].style.background = valCouleur[1];
fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur[0]}, ${valCouleur[1]}`;

// Inclinaison

inputRange.addEventListener('input', (e) => {

  inclinaison = e.target.value * 3.6;
  fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur}`;

})

// Ajout et suppression 
btns.forEach(btn => {
  btn.addEventListener('click', rajouteEnleve);
})

function rajouteEnleve(e){

  span.innerText = "";
  const allInputs = document.querySelectorAll('.inp-couleur');
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  // console.log(randomColor);

  if(e.target.className === "plus"){

    if(allInputs.length > 8){
      return;
    }

    const nvCouleur = document.createElement('input');
    nvCouleur.setAttribute('class', 'inp-couleur');
    nvCouleur.setAttribute('data-index', index);
    nvCouleur.setAttribute('maxlength', 7);
    nvCouleur.value = `#${randomColor.toUpperCase()}`;
    nvCouleur.style.background = `#${randomColor}`;
    containerCouleur.appendChild(nvCouleur);

    valCouleur.push(`#${randomColor.toUpperCase()}`);

    // MAJ fond
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
    index++;

  }
  else if(e.target.className === "moins"){

    if(valCouleur.length === 2){
      span.innerText = 'Il faut au moins deux couleurs';
    } 
    else {
      valCouleur.pop();
      allInputs[allInputs.length-1].remove();
       // MAJ fond
      fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
      index--;
    }
  }
  
  //MAJ inputs
  allInputs.forEach(inp => {
    inp.addEventListener('input', MAJColors);
  });  
}

// MAJ inputs de base
inputsCouleur.forEach(inp => {
  inp.addEventListener('input', MAJColors)
})
function MAJColors(e){

  let indexEnCours = e.target.getAttribute('data-index');
  e.target.value = e.target.value.toUpperCase();
  valCouleur[indexEnCours - 1] = e.target.value.toUpperCase();
  e.target.style.background = valCouleur[indexEnCours - 1];
  fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
}

//Couleurs aléatoires

btnRandom.addEventListener('click', (e) => {

  const inputs = document.querySelectorAll('.inp-couleur');

  for(i = 0; i < valCouleur.length; i++) {
    valCouleur[i] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    inputs[i].value = valCouleur[i].toUpperCase();
    inputs[i].style.background = valCouleur[i].toUpperCase();
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleur})`;
  }

})