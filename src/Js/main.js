const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener("click", function() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value

    let message;

    age = parseInt(age);

    if (isNaN(age)) {
        message = 'Error: por favor ingrese una edad validad'
    } else if (age < 18) {
        message = `Hola ${name}, eres menor de edad`
    } else if (age >= 18 && age <= 59) {
        message = `Hola ${name}, eres mayor de edad`
    } else if (age >= 60) {
        message = `Hola ${name}, eres adulto mayor`
    }

    result.textContent = message
} )

