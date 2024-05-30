const user = localStorage.getItem("userOnline")

if (user == null) {
    window.location.href = "/"
}

const btnLogout = document.getElementById("btn-logout")

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "/"
})