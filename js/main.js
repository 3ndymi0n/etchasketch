const container = document.getElementById('grid-container');

const setSize = document.getElementById('set-size');
setSize.addEventListener('click', () => {
    console.log(pullSliderValue())
    setGridSize(pullSliderValue());
});



function pushSliderVal(val) {
    document.getElementById('slider-value').value=val;
}

function pullSliderValue() {
    return document.getElementById('slider-value').value
}

function setGridSize(size) {
    let gridBody = document.createElement('div');
    gridBody.classList.add('grid-body');

    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');

    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    for(let i = 0; i < size; i++) {
        for(let i = 0; i < size; i++){
            gridRow.appendChild(gridItem);
            console.log(gridRow);
        }
        gridBody.appendChild(gridRow);
    }
    container.appendChild(gridBody);
}


