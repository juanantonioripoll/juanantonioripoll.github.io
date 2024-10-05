const longitudslider = document.querySelector(".longitud-pass input");
const copciones = document.querySelectorAll(".opcion input");
const btncopiar = document.querySelector(".input-box span");
const textpass = document.querySelector(".input-box input");
const indicadorpass = document.querySelector(".indicador-pass");
const btngenerador = document.querySelector(".btn-generador");

const caracateres = {
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeros: "0123456789",
    simbolos: ".,*+-#@<>~(){}:!$%&|[];"
}

const generadorpass = () => {
    let passtatico = "",
        passaleatorio = "",
        excluirduplicados = false,
        longitudpass = longitudslider.value;

    copciones.forEach(opcion => {
        if (opcion.checked) {
            if (opcion.id !== "excduplicados" && opcion.id !== "espacio") {
                passtatico += caracateres[opcion.id];
            } else if (opcion.id === "espacio") {
                passtatico += `  ${passtatico}  `;
            } else {
                excluirduplicados = true;
            }
        }
    });

    for (let i = 0; i < longitudpass; i++) {
        let charaleatorio =
            passtatico[Math.floor(Math.random() * passtatico.length)];
        if (excluirduplicados) {
            !passaleatorio.includes(charaleatorio) ||
                charaleatorio == " " ? passaleatorio += charaleatorio : i--;
        } else {
            passaleatorio += charaleatorio;
        }
    }
    textpass.value = passaleatorio;

}

const actualizarpass = () => {
    indicadorpass.id =
        longitudslider.value <= 8 ? "weak" : longitudslider.value
            <= 16 ? "medium" : "strong";
}

const actualizarslider = () => {
    document.querySelector(".longitud-pass span").innerText =
        longitudslider.value;
    generadorpass();
    actualizarpass();
}
actualizarslider();

const copiarpass = () => {
    navigator.clipboard.writeText(textpass.value);
    btncopiar.innerText = "check";
    btncopiar.style.color = "#43A047";
    setTimeout(() => {
        btncopiar.innerText = "content_copy";
        btncopiar.style.color = "#707070";
    }, 1500);
}

btncopiar.addEventListener("click", copiarpass);
longitudslider.addEventListener("input", actualizarslider);
btngenerador.addEventListener("click", generadorpass);