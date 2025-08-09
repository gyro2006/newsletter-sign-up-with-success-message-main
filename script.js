const email = document.getElementById('email');
const form  = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        message.push('Valid email required');
        email.style.backgroundColor = "hsl(4, 100%, 67%, 0.2)";
        email.style.color = "hsl(4, 100%, 67%)";
        email.style.border = "2px solid hsl(4, 100%, 67%)";
    }
    if (message.length > 0) {
        e.preventDefault();
        errorElement.innerText = message.join(', ');
    }
})