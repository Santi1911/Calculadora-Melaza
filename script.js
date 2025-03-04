function calcularMelaza() {
    let nitrogeno = parseFloat(document.getElementById("nitrogeno").value);
    let volumen = parseFloat(document.getElementById("volumen").value);
    let relacion = parseFloat(document.getElementById("relacion").value);
    let carbono = parseFloat(document.getElementById("carbono").value) / 100;

    if (isNaN(nitrogeno) || isNaN(volumen) || isNaN(relacion) || isNaN(carbono) || carbono === 0) {
        document.getElementById("resultado").innerHTML = "⚠️ Por favor, ingresa valores válidos.";
        return;
    }

    let melaza = (nitrogeno * volumen * relacion) / (carbono * 10);

    document.getElementById("resultado").innerHTML = `💡 Debes añadir <b>${melaza.toFixed(2)} g o mL</b> de melaza.`;
}
