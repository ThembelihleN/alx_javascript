//declare variables
const form = document.getElementById("submitForm");
const nameInput =document.getElementById("name");
const emailInput = document.getElementById("email");

//add an event listner
button.addEventListener("submit", handleFormSubmit);

//function to handle form submission
function handleFormSubmit(event){
    event.preventDefault();

    const name = nameInput.value
    const email = emailInput.value

    if (!name || !email) {
        alert("Please fill in all required fields");
    } else {
        form.onsubmit();
        alert("Form submitted successfully!");
    }
}