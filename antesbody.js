let encabezado = "";

window.onclick = function() {
    //crea una seria de elements por cada tag encontrado
    let encabezado = document.createElement("h1");
    const text = document.createTextNode("Quieres ser mi morrita?");

    encabezado.appendChild(text);
    document.body.appendChild(encabezado);
}