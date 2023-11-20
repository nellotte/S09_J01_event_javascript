// Fonctionnalité 1 : 
//Séléction de l'élément : 
var footer = document.querySelector('footer');
console.log(footer)
//Ajout d'un event listener
footer.addEventListener('click', function() {
  // Affiche "clique" en console
  console.log('clique fonctionnalité 1');
});

// Fonctionnalité 1-bis : 
//Séléction de l'élément : 
var footer = document.getElementsByTagName('footer')[0];
console.log(footer)
// Initialise le compteur à 1
var nombreDeClicks = 0;
//Ajout d'un event listener
footer.addEventListener('click', function() {
  // incrémentation de la variable
  nombreDeClicks+=1 ;
  console.log('clique 1-bis #' + nombreDeClicks);
});

//Fonctionnalité 2 :
// Sélection du bouton du burger menu
var burgerMenu = document.querySelector('.navbar-toggler');
// Sélection des éléments de la navbar 
var navbarHeader = document.getElementById('navbarHeader');
//Ajout d'un event listener au click
burgerMenu.addEventListener('click', function() {
  navbarHeader.classList.toggle('collapse');
}
);

//Fonctionnalité 3 :
// Sélélection de la première card
var firstCard =document.querySelector('.col-md-4');
console.log(firstCard);
//sélection du bouton "edit"
var boutonEdit = firstCard.querySelector('.btn-outline-secondary');
console.log(boutonEdit);
//Ajout d'un event listener au click
boutonEdit.addEventListener('click', function() {
// changer la couleur
firstCard.style.color = 'red';
}
);

//Fonctionnalité 4 :
// Sélélection de la 2e card
var secondCard = document.querySelectorAll('.col-md-4')[1];
console.log(secondCard);
console.log(firstCard);
//sélection du bouton "edit"
var secondBoutonEdit = secondCard.querySelector('.btn-outline-secondary');
console.log(secondBoutonEdit);
//Ajout d'un event listener au click
secondBoutonEdit.addEventListener('click', function(){
  if (secondCard.style.color ==='green'){
    secondCard.style.color = ''; //si c'est égale à vert, on passe à la couleur par defaut 
  } 
  else {
    secondCard.style.color = 'green';
  }
});