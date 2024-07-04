
const containerE1 = document.querySelector(".container");

const careers = ["Developer", "web Developer", "Freelancer", "Instructor"];

let careersIndex = 0;

let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerE1.innerHTML = `<h1>I am ${
    careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careersIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex > careers[careersIndex].length) {
    careersIndex = (careersIndex + 1) % careers.length;
    characterIndex = 0;
  }
  setTimeout(updateText, 400);
}

updateText();