const container = document.getElementById("grid-container");
let gridColour = "black";

setGridSize(16);

const setSize = document.getElementById("set-size");
setSize.addEventListener("click", () => {
  setGridZero();
  setGridSize(pullSliderValue());
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  setGridZero();
  setGridSize(16);
  document.getElementById("grid-size").value = 16;
  document.getElementById("slider-value").value = 16;
});

const cellColourSelect = document.getElementsByClassName("item-color");
Array.from(cellColourSelect).forEach(function (e) {
  e.addEventListener("click", () => {
    gridColour = e.id;
  });
});

function randColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function pushSliderVal(val) {
  document.getElementById("slider-value").value = val;
}

function pullSliderValue() {
  return document.getElementById("slider-value").value;
}

function setGridZero() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function setGridColour(e) {
  if (gridColour == "black") {
    e.style["background-color"] = "#000";
  } else if (gridColour == "erase") {
    e.style["background-color"] = "#fff";
  } else if (gridColour == "colour") {
    e.style["background-color"] = randColor();
  }
}

function setGridSize(size) {
  for (let i = 0; i < size; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let a = 0; a < size; a++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridRow.appendChild(gridItem);
    }
    container.appendChild(gridRow);
  }

  let gridItems = document.getElementsByClassName("grid-item");
  Array.from(gridItems).forEach(function (e) {
    e.addEventListener("mouseenter", () => {
      setGridColour(e);
    });
  });
}
