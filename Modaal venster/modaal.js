
// variabele die alle content van de modale vensters krijgt
const modaalContent = document.querySelectorAll('.modaalContent');

// alle modale content verwijderen uit de DOM
for(let i=0; i<modaalContent.length; i++) {
	let modaalNode = modaalContent[i];
	modaalNode.parentNode.removeChild(modaalNode);
}

// nodelist van alle modale knoppen, die inhoud moeten oproepen 
const modaalKnoppen = document.querySelectorAll('.modaalKnop');

// alle modaal knoppen in een array plaatsen, eventlistener koppelen
const modaalKnoppenArray = [];

// toekomstige node-elementen aanmaken in de variabele
let modaalAchtergrond 		= document.createElement('div');
modaalAchtergrond.className = 'modaalAchtergrond';
let modaal 					= document.createElement('div');
modaal.className 			= 'modaal';
let sluitKnop 				= document.createElement('button');
sluitKnop.className 		= 'sluitKnop';
sluitKnop.innerHTML 		= '&#x00D7;';

// modale content aan DOM toevoegen
const voegInhoudToe = (event) => {
	const teller = modaalKnoppenArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(sluitKnop);
	modaal.appendChild(modaalContent[teller]);
	modaalAchtergrond.appendChild(modaal);
	document.body.appendChild(modaalAchtergrond);
}

// sluit het modale venster
const sluitModaal = () => {
	modaal.innerHTML = '';
	modaalAchtergrond.innerHTML = '';
	document.body.removeChild(modaalAchtergrond);
}

// sluitKnop event sluiten geven
sluitKnop.addEventListener('click', sluitModaal);

// alle modaal knoppen in een array plaatsen, eventlistener koppelen
for(let i=0; i<modaalKnoppen.length; i++) {
	// toevoegen aan de array
	modaalKnoppenArray.push(modaalKnoppen[i]);
	// klik-event toe voegen
	modaalKnoppen[i].addEventListener('click', voegInhoudToe); 
}
