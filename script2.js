// Fonctionnalité 5 :
//selection navbarheader
var navbar = document.querySelector('header');
console.log(navbar);
//selection lien vers la stylesheet
var bootstrapStylesheet = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
console.log(bootstrapStylesheet);

var bootstrapStylesheetEnabled = true;

navbar.addEventListener('dblclick', function() { //ajout event listener
  if (bootstrapStylesheet) {
    bootstrapStylesheet.disabled = !bootstrapStylesheetEnabled;
    bootstrapStylesheetEnabled = !bootstrapStylesheetEnabled;
    console.log('Toggle bootstrap stylesheet disabled state');
  }
});


// Fonctionnalité 7 :
// Sélection du bouton gris
var greyButton = document.querySelector('.btn-secondary');
console.log(greyButton);

greyButton.addEventListener('click', function(){
// Sélection des cards
    var allCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")
  console.log(allCard);
//Séléction dernière card
  var lastCard = document.querySelector('.col-md-4:last-of-type');
  console.log(lastCard);
//déplacer le dernier en premier : 
  lastCard.parentNode.insertBefore(lastCard, allCard[0])
});

