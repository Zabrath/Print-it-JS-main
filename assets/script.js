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
//création du compteur
let compteurSlides = 0
// selection des class
let bullets = document.querySelector (".dots")
let bulletSelected = document.querySelector(".dot_selected")
let image = document.querySelector(".banner-img")
let texte = document.querySelector(".banner-text")



//Evenement clique
let arrowRight = document.querySelector (".arrow_right")
arrowRight.addEventListener("click",function(){
	//fonctionnement compteur
	compteurSlides++
	// reset compteur pour éviter la buté
	if (compteurSlides > 3) {

		compteurSlides = 0		
	}
	//attribution des images
	image.setAttribute("src","./assets/images/slideshow/"+slides[compteurSlides].image)
	// attribution du texte
	texte.innerHTML = slides[compteurSlides].tagLine
	//suppresion des dots selected
	bullet.forEach((dot) => {
		dot.classList.remove("dot_selected")
	})
	//ajout dot selected à la bullet compteurslides
	bullet[compteurSlides].classList.add("dot_selected")

})


let arrowLeft = document.querySelector (".arrow_left")
arrowLeft.addEventListener("click",function(){
	compteurSlides--
	if (compteurSlides < 0) {

		compteurSlides = 3		
	}

	image.setAttribute("src","./assets/images/slideshow/"+slides[compteurSlides].image)

	texte.innerHTML = slides[compteurSlides].tagLine

	bullet.forEach((dot) => {
		dot.classList.remove("dot_selected")
	})
	bullet[compteurSlides].classList.add("dot_selected")
})


// boucle bullets slide

for (let compteur = 0; compteur < slides.length; compteur++) {
//création balise
let dot = document.createElement("p")
// ajout class
dot.classList.add("dot")
// Parent de dot
bullets.appendChild(dot)
	
}

// selection des balise p 
let bullet = document.querySelectorAll(".dot")

// remplissage de la bullet 1
bullet[0].classList.add("dot_selected")








