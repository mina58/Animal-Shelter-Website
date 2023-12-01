const animalData = [
	{
		name: "Oliver",
		type: "cat",
		imagePath: "../images/shelter-cat-1.jpg",
	},
	{
		name: "Max",
		type: "dog",
		imagePath: "../images/shelter-dog-2.jpg",
	},
	{
		name: "Luna",
		type: "cat",
		imagePath: "../images/shelter-cat-3.jpg",
	},
	{
		name: "Bella",
		type: "dog",
		imagePath: "../images/shelter-dog-1.jpg",
	},
	{
		name: "Charlie",
		type: "dog",
		imagePath: "../images/shelter-dog-3.jpg",
	},
	{
		name: "Sadie",
		type: "dog",
		imagePath: "../images/shelter-dog-4.jpg",
	},
	{
		name: "Mocha",
		type: "cat",
		imagePath: "../images/shelter-cat-2.jpg",
	},
	{
		name: "Rocky",
		type: "dog",
		imagePath: "../images/shelter-dog-5.jpg",
	},
	{
		name: "Daisy",
		type: "dog",
		imagePath: "../images/shelter-dog-6.jpg",
	},
];

const container = document.getElementsByClassName("available-container")[0];
const [dogsBtn, catsBtn] = document.getElementsByClassName("filter-btn");

let displayedAnimals = [];

function displayAnimals() {
	const animalElements = document.createDocumentFragment();
	displayedAnimals.forEach((animal) => {
		const anchor = document.createElement("a");
		const heading = document.createElement("h4");
		heading.textContent = animal.name;
		const img = document.createElement("img");
		img.setAttribute("src", animal.imagePath);
		const card = document.createElement("div");
		card.classList.add("animal-card");
		card.appendChild(img);
		card.appendChild(heading);
		anchor.setAttribute("href", `${animal.type}.html`);
		anchor.appendChild(card);
		animalElements.appendChild(anchor);
	});
	console.log(animalElements);
	container.appendChild(animalElements);
}

function displayAll() {
	container.innerHTML = "";
	displayedAnimals = [];
	animalData.forEach((animal) => {
		displayedAnimals.push(animal);
	});
	displayAnimals();
}

function displayCats() {
	container.innerHTML = "";
	displayedAnimals = [];
	animalData.forEach((animal) => {
		if (animal.type === "cat") {
			displayedAnimals.push(animal);
		}
	});
	displayAnimals();
}

function displayDogs() {
	container.innerHTML = "";
	displayedAnimals = [];
	animalData.forEach((animal) => {
		if (animal.type === "dog") {
			displayedAnimals.push(animal);
		}
	});
	displayAnimals();
}

catsBtn.addEventListener("click", () => {
	if (catsBtn.classList.contains("filter-selected")) {
		catsBtn.classList.remove("filter-selected");
		displayAll();
	} else {
		if (dogsBtn.classList.contains("filter-selected")) {
			dogsBtn.classList.remove("filter-selected");
		}
		catsBtn.classList.add("filter-selected");
		displayCats();
	}
});

dogsBtn.addEventListener("click", () => {
	if (dogsBtn.classList.contains("filter-selected")) {
		dogsBtn.classList.remove("filter-selected");
		displayAll();
	} else {
		if (catsBtn.classList.contains("filter-selected")) {
			catsBtn.classList.remove("filter-selected");
		}
		dogsBtn.classList.add("filter-selected");
		displayDogs();
	}
});

displayAll();
