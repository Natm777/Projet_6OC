// Définition d'un tableau contenant les informations des diapositives
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments du DOM pour les flèches droite et gauche et le conteneur des points
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let boutonContainer = document.querySelector(".dots");
let counter = 0 // Compteur pour suivre la diapositive actuelle


// Ajout d'un écouteur d'événement sur la flèche gauche pour reculer dans les diapositives
leftArrow.addEventListener("click", () => {
	counter = counter-1; // Décrémente le compteur

	if (counter <0) {
		counter = slides.length -1 // Si le compteur est inférieur à 0, il passe à la dernière diapositive
	}
	updateSlide ()
	updateDots ()
});

// Ajout d'un écouteur d'événement sur la flèche droite pour avancer dans les diapositives
rightArrow.addEventListener("click", () => {
	counter = counter+1; // Incrémente le compteur
	
	if (counter >slides.length-1) { // Si le compteur dépasse l'index maximal des diapositives counter est réinitialisé à 0
		counter = 0
	}
	updateSlide ()
	updateDots ()

});

// Fonction pour créer un point dans boutonContainer
function createDot () {
	// Crée un nouvel élément <div>
	let elementDot = document.createElement("div")
	
	// Ajout de la classe CSS "dot" à l'élément <div> créé
	elementDot.classList.add("dot")
	
	// Ajoute cet élément <div> à l'intérieur de l'élément `boutonContainer (déclaré plus haut)`
	boutonContainer.appendChild(elementDot);

}

// Fonction pour créer les points correspondant au nombre de diapositives
function createDots () {
	// Vide le contenu actuel de `buttonContainer`
	boutonContainer.innerHTML = "";

	// Creer un boucle pour chaque élément dans `slides`, appelle `createDot` pour créer un point
	for (let i = 0; i < slides.length; i++){

		createDot();
	}

}

// Définit la fonction `updateSlide` pour mettre à jour la diapositive affichée
function updateSlide () {
	// Ici, nous sommes en train de définir une nouvelle variable slide
	let slide = slides[counter]; //Nous voulons l'élément dans le tableau slides à la position indiquée par counter.

	// Sélectionne l'élément du DOM pour l'image de la bannière
	let bannerImage = document.querySelector(".banner-img")

	// Sélectionne l'élément du DOM pour la légende de la bannière
	let bannerTagLine = document.querySelector("#banner p")

	// Met à jour l'attribut src de l'image de la bannière avec le chemin de l'image de la diapositive actuelle
	bannerImage.src = `./assets/images/slideshow/${slide.image}`;
	
	// Met à jour le contenu HTML de la légende de la bannière avec la légende de la diapositive actuelle
	bannerTagLine.innerHTML = slide.tagLine;

}

function updateDots() {
	 // Sélectionne tous les éléments du DOM avec la classe 'dot'
	let dots = document.querySelectorAll(".dot");
	
	// Parcourt chaque point pour mettre à jour sa classe CSS
	for (let i = 0; i < dots.length; i++) {

		//si l'index actuel du point (i) est égal à counter (diapositive actuelle)
		if (i === counter) {
		
		// Ajoute la classe 'dot_selected' au point correspondant à la diapositive active
			dots[i].classList.add("dot_selected");

		// Retire la classe 'dot_selected' des autres points
		}else { 
		
			dots[i].classList.remove("dot_selected");

		}
	}

}


createDots();
updateSlide ();
updateDots ();
