const btn = document.querySelector('.btn-responsive');
const liste = document.querySelector('ul');
const toggle = false;

btn.addEventListener('click', () => {

  liste.classList.toggle('show');

})

window.addEventListener('resize', () => {

  if(window.innerWidth > 650){
    liste.classList.remove('show');
  }

})