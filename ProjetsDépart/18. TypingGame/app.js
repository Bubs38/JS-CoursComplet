const APICALL = 'http://api.quotable.io/random';

const tempsAffichage = document.querySelector('.temps');
const scoreAffichage = document.querySelector('.score');

const phraseAEcrire = document.querySelector('.phrase-a-ecrire');
const phraseTest = document.querySelector('.phrase-test');

let temps = 60;
let score = 0;
let PhrasePourScore;

tempsAffichage.innerText = `Temps : ${temps}`;
scoreAffichage.innerText = `Score : ${score}`;

let timer = setInterval(time, 1000);

function time() {
  temps--;
  tempsAffichage.innerText = `Temps : ${temps}`;
  scoreAffichage.innerText = `Score : ${score}`;
  if (temps === 0) {
    clearInterval(timer);
  }
}

// Prendre une phrase de l'api

async function afficherPhrase () {

  const appel = await fetch(APICALL);
  const resultats = await appel.json();
  // console.log(resultats);
  const phrase = resultats.content;
  PhrasePourScore = phrase.length;

  phraseAEcrire.innerHTML = "";

  phrase.split('').forEach(char => {
    
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    phraseAEcrire.appendChild(charSpan);

  });
  phraseTest.value = null;
}
afficherPhrase();

phraseTest.addEventListener('input', () => {

  const tableauPhrase = phraseAEcrire.querySelectorAll('span');
  const tableauTest = phraseTest.value.split('');

  let correct = true;

  tableauPhrase.forEach((charSpan, index) => {
    
    const character = tableauTest[index];

    if (character === undefined){
      charSpan.classList.remove('correct');
      charSpan.classList.remove('incorrect');
      correct = false;
    }
    else if (character === charSpan.innerText){
      charSpan.classList.add('correct');
      charSpan.classList.remove('incorrect');
    } else {
      charSpan.classList.remove('correct');
      charSpan.classList.add('incorrect');
      correct = false;
    }
    
  })

  if (correct){
    afficherPhrase();
    score += PhrasePourScore;
  }

});