const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');


const formConnection = document.querySelector('.form-connection');


btnInscription.addEventListener('click', () => {

  if(formConnection.classList.contains('apparition')){
    formConnection.classList.remove('apparition');
  }

  formInscription.classList.toggle('apparition');

})

btnConnection.addEventListener('click', () => {

  if(formInscription.classList.contains('apparition')){
    formInscription.classList.remove('apparition');
  }

  formConnection.classList.toggle('apparition');

})

formInscription.addEventListener('submit', (e) => {
  e.preventDefault();

  const mailValeur = emailInscription.value;
  const mdpInscriptionValeur = mdpInscription.value;

  createUserWithEmailAndPassword(auth, mailValeur, mdpInscriptionValeur)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  
})