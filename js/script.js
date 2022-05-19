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

const myType = arrayIcons.map((item, i) => item.type);
console.log(myType);

// stampare in pagina tutte le icone
for (let i = 0; i < arrayIcons.length; i++) {
	const itemIesimo = arrayIcons[i];
	const icon = document.createElement('i');
	const myFamily = itemIesimo.family;
	const myPrefix = itemIesimo.prefix;
	const myName = itemIesimo.name;
	icon.className = myFamily + " " + myPrefix + myName;

	const myColor = itemIesimo.color;




	// appendere l'icona al conteniore
	const iconContainer = createDivEl();
	iconContainer.append(icon);
	container.append(iconContainer);
}










// creare una funzione che mi crea ogni div che conterra l'icona
function createDivEl(){
	const divEl = document.createElement('div');
	return divEl;
}
/*
	Milestone 2
	Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/










/*
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/