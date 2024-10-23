// Initialisieren der Startfolie auf 1 (erste Folie)
var slideIndex = 1;
// Anzeigen der Folie basierend auf dem aktuellen slideIndex
showSlides(slideIndex);

// Funktion zur Steuerung der nächsten/vorherigen Folien
function plusSlides(n) {
  // Ändern des slideIndex um n (n kann positiv oder negativ sein)
  showSlides(slideIndex += n);
}

// Funktion zur Steuerung der aktuellen Folie basierend auf einer Thumbnail-Auswahl
function currentSlide(n) {
  // Setzen des slideIndex auf n (die gewählte Folie)
  showSlides(slideIndex = n);
}

// Funktion zum Anzeigen der Folien basierend auf dem gegebenen Index n
function showSlides(n) {
  let i;
  // Holen aller Elemente mit der Klasse "mySlides" (die einzelnen Folien)
  let slides = document.getElementsByClassName("mySlides");
  // Holen aller Elemente mit der Klasse "dot" (die Navigationspunkte oder Thumbnails)
  let dots = document.getElementsByClassName("dot");
  
  // Wenn n größer ist als die Anzahl der Folien, setze slideIndex auf die erste Folie
  if (n > slides.length) {slideIndex = 1}
  // Wenn n kleiner ist als 1, setze slideIndex auf die letzte Folie
  if (n < 1) {slideIndex = slides.length}
  
  // Verstecke alle Folien
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Entferne die "active" Klasse von allen Punkten
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Zeige die aktuelle Folie an (slideIndex-1 wegen nullbasierter Indizierung)
  slides[slideIndex-1].style.display = "block";
  // Füge der aktuellen Punktklasse die "active" Klasse hinzu
  dots[slideIndex-1].className += " active";
}


// Script Formular

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("newsletterForm").addEventListener("submit", function(event) {
      event.preventDefault();
  });
});