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