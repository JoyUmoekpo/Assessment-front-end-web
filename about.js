console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been submitted successfully!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function mouseoverEvent(evt) {
	evt.preventDefault();
	alert("You're amazing!")
};

let image = document.querySelector('img')

image.addEventListener('mouseover', mouseoverEvent);