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
console.log(arrayIcons);
// {
// 	name: 'cat',
// 	prefix: 'fa-',
// 	type: 'animal',
// 	family: 'fas',
// 	color: 'orange'
// },
/*
	Milestone 1
	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
*/

// creare un div globale
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);



const selectFilter = document.getElementById('filtro');

const myTypeSpec = arrayIcons.map((item) => item.type);

const myIconAnimal = [];
const myIconVegetable = [];
const myIconUser = [];




// stampare in pagina tutte le icone
for (let i = 0; i < arrayIcons.length; i++) {
	
	const itemIesimo = arrayIcons[i];
	const icon = document.createElement('i');
	const myFamily = itemIesimo.family;
	const myPrefix = itemIesimo.prefix;
	const myName = itemIesimo.name;
	const myType = itemIesimo.type;
	icon.className = myFamily + " " + myPrefix + myName;

	// push nell'array esterno
	if (itemIesimo.type === "animal"){
		myIconAnimal.push(icon);
	} else if (itemIesimo.type === "vegetable"){
		myIconVegetable.push(icon);
	} else {
		myIconUser.push(icon);
	}

	
	/*
	Milestone 2
	Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
	*/

	const myColor = itemIesimo.color;
	if (itemIesimo.type === "animal"){
		icon.style.color = myColor;
	} else if (itemIesimo.type === "vegetable"){
		icon.style.color = myColor;
	} else {
		icon.style.color = myColor;
	}

	
	switch(selectFilter.value){
		case "all":
			let iconContainer = createDivEl();
			iconContainer.append(icon);
			container.append(iconContainer);
			break;
		case "animal":
			iconContainer = createDivEl();
			iconContainer.append(myIconAnimal[i]);
			container.append(iconContainer);
			break;
		case "vegetable":
			iconContainer = createDivEl();
			iconContainer.append(myIconVegetable[i]);
			container.append(iconContainer);
			break;
		case "user":
			iconContainer = createDivEl();
			iconContainer.append(myIconUser[i]);
			container.append(iconContainer);
	}

	// appendere l'icona al conteniore
	
}








console.log(myIconAnimal);
console.log(myIconVegetable);
console.log(myIconUser);




// creare una funzione che mi crea ogni div che conterra l'icona
function createDivEl(){
	const divEl = document.createElement('div');
	return divEl;
}

/*
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/