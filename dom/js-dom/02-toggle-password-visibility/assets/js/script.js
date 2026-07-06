console.log("Script loaded correctly");

const input = document.querySelector("#inputPassword2");
const button = document.querySelector("#togglePasswordBtn");

button.addEventListener("click", () => {

    const inputType = input.getAttribute("type");

    if (inputType === "password"){
        input.setAttribute("type", "text");
        button.textContent = "Nascondi password";
    } else {
        input.setAttribute("type", "password");
        button.textContent = "Mostra password";
    }
})