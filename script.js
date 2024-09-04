
const marcasCoches = [
    "toyota", "honda", "ford", "chevrolet", "nissan", ,"volkswagen", "hyundai", "kia", "bmw", "mercedes-benz", "mercedes", "audi", "tesla", "volvo", "porsche", "ferrari", "lamborghini", "maserati", "fiat", "renault", "peugeot",
    // Agrega más marcas aquí, todas en minúsculas
];

function validarMarca() {
    const marcaIngresada = document.getElementById("marca").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (marcasCoches.includes(marcaIngresada)) {
        const marcaCapitalizada = marcaIngresada.charAt(0).toUpperCase() + marcaIngresada.slice(1);
        resultado.textContent = `Sí, ${marcaCapitalizada} es una marca de coche válida.`;
        resultado.classList.add("correcto");
        resultado.classList.remove("incorrecto");
    } else {
        const marcaCapitalizada = marcaIngresada.charAt(0).toUpperCase() + marcaIngresada.slice(1);
        resultado.textContent = `No se encontró la marca "${marcaCapitalizada}". Por favor, verifica que esté escrita correctamente.`;
        resultado.classList.add("incorrecto");
        resultado.classList.remove("correcto");
    }
}