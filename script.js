//Creating const that validates form input with javascript
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container'); //this allows younto select the html element or css class or anything
const message = document.getElementById('message');

let isValid = false;
//the reason why we're using let and not const is because these values are going to change.
let passwordsMatch = false;

function validateForm() {
    //Using constraint API
    isValid = form.checkValidity(); //this method returns a bolean

    //Style main message for an error
   if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red'; //for the text color to change
    messageContainer.style.borderColor = 'red' //For the border color to change
    return; //A return statement helps you break out of a function
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        message.style.borderColor = 'green';
    }
}

//Function to store the form data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user); // Normally this would be passed into a service
}

//creating a function that stores the data without loosing it because there's no backend
function processFormData(e) {
    e.preventDefault();
    //valide form
    validateForm();
    // Submit Data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);