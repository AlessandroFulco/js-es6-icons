const arrayIcons = [
{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.getElementById('container');
const typeSelect = document.getElementById('filtro');


// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

function createElement(arrayIcons) {
	for(let i = 0; i < arrayIcons.length; i++) {
		const myName = arrayIcons[i].name;
		const myType = arrayIcons[i].type;
		const myFamily = arrayIcons[i].family;
		const myPrefix = arrayIcons[i].prefix;
		const myColor = arrayIcons[i].color;
	
		const icon = document.createElement("i");

		const containerSubTitle = document.createElement('div');
		container.style.textAlign = "center";
		const subTitle = document.createElement('h3');
		subTitle.innerHTML = myName;

		const containerIcon = document.createElement('div')
		containerIcon.className = 'container-icon';
		
		let myClass = myFamily + " " + myPrefix + myName;
		icon.className = myClass;
		// Milestone 2
		// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
		icon.style.color = arrayIcons[i].color;
		console.log(icon);

		containerSubTitle.append(icon);
		containerSubTitle.append(subTitle);
		containerIcon.append(containerSubTitle);
		container.append(containerIcon);
		
		
		// containerIcon.append(icon);
		// containerSubTitle.append(subTitle);
		// containerIcon.append(containerSubTitle);
		// container.append(containerIcon);
	}
}

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
const opt1 = document.getElementById("selected").selected = "true";
createElement(arrayIcons);
typeSelect.addEventListener("change",
	function() {
		container.innerHTML = "";
		let valueSelect = typeSelect.value;
		if(valueSelect == "animal"){
			const myAnimals = arrayIcons.filter((item) => item.type === "animal");
			createElement(myAnimals);
			console.log(myAnimals);

		} else if(valueSelect == "vegetable"){
			const myVegetable = arrayIcons.filter((item) => item.type === "vegetable");
			createElement(myVegetable);
			console.log(myVegetable);

		} else if (valueSelect == "user") {	
			const myUser = arrayIcons.filter((item) => item.type === "user");
			createElement(myUser);
			console.log(myUser);
			
		} else {
			createElement(arrayIcons);
		}
	}
);