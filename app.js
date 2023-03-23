function moverRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    divModoSexo.style.display = 'block';
    const cancion = new Audio('Resources//img_modo_hot.mp3');
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/736x/ba/d9/1f/bad91f71d415174ce532b091ac20a32f.jpg";
    console.log(img);
    divModoSexo.appendChild(img);
})

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});