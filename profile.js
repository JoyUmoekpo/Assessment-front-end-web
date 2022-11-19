let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

function favColor() {
    alert('Your favorite color is green.');
}

colorBtn.addEventListener('click', favColor);

function favPlace() {
    alert('Your favorite place is Paris, France.');
}

placeBtn.addEventListener('click', favPlace);

function favRitual() {
    alert('Your favorite ritual is writing short stories before bed.');
}

ritualBtn.addEventListener('click', favRitual);