
function determinarRangoEtario() {
    let edad = document.getElementById('edad').value;
    if (isNaN(edad) || edad === "") {
        document.getElementById('mostrar').textContent = "Por favor, ingrese un número válido.";
        return;
    }
    edad = parseInt(edad);
    let rango;
    if (edad < 0) {
        rango = "La edad no puede ser negativa.";
    } else if (edad < 12) {
        rango = "Niñez";
    } else if (edad < 18) {
        rango = "Adolescencia";
    } else if (edad < 65) {
        rango = "Adultez";
    } else if(edad > 65 && edad < 150){
        rango = "Vejez";
    }else {
        rango = "Edad no valida";
    }

    document.getElementById('mostrar').textContent = rango;
}

document.getElementById('calcular').addEventListener('click', determinarRangoEtario);

// Walter Pacheco