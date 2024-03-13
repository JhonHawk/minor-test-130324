const pokemonClasses = document.getElementById("pokemon-classes");

const generateListButtonsClass = (color, text) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = `btn btn-${color}`;
  button.textContent = text;
  li.appendChild(button);
  pokemonClasses.appendChild(li);
};

const clases = [
  { color: "normal", text: "Normal" },
  { color: "red", text: "Fire" },
  { color: "blue", text: "Water" },
  { color: "green", text: "Grass" },
  { color: "yellow", text: "Electric" },
];


clases.forEach((clase) => {
    generateListButtonsClass(clase.color, clase.text);
}); 