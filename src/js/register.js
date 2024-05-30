// formulario

const form = document.getElementById("register-form")

// input
const username = document.getElementById("username")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const checkPasswords = validatePasswords(password, confirmPassword)
    const checkEmail = await validateEmail(email)

    if (checkPasswords === true && checkEmail === true) {
        // aca llamamos a la funcion que nos guarda un nuevo usuario
        await registerUser(username, lastName, email, password)
        window.location.href= "/"
    }
})


//valida que las contraseñas sean iguales
function validatePasswords(password, confirmPassword){
    if(password.value === confirmPassword.value){
        return true
    } else {
        return false
    }
}

//valida que el correo no exista
async function validateEmail (email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data = await response.json() // convertimos de json a javascript

    if (data.length === 0) {
        return true
    } else {
        return false
    }
}

async function registerUser(username, lastName, email, password) {
    const newUser = {
        username: username.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
    })
    // form.reset()
}