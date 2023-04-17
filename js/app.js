let jugadaCompu = 0;
let jugadaUsuario = 0;
let divParaAlert = document.querySelector(`#divParaAlert`)
let btnInicia = document.querySelector(`#btnInicia`)
let btnPiedra = document.querySelector(`#btnPiedra`)
let btnPapel = document.querySelector(`#btnPapel`)
let btnTijera = document.querySelector(`#btnTijera`)

btnInicia.addEventListener(`click`, iniciarJuego)
btnPiedra.addEventListener(`click`, eligePiedra)
btnPapel.addEventListener(`click`, eligePapel)
btnTijera.addEventListener(`click`, eligeTijera)

function iniciarJuego(){
    btnInicia.disabled = true;
    btnInicia.innerHTML = `Estas jugando`
    btnPiedra.disabled = false;
    btnPapel.disabled = false;
    btnTijera.disabled = false;
    
    let computadora = Math.round(Math.random() * (3 - 1) + 1);
    console.log(computadora);
    jugadaCompu = computadora;

    if (btnInicia.innerHTML === `Estas jugando`){
        divParaAlert.className = `alert alertRosa d-none`
    }
}

function eligePiedra(){
    jugadaUsuario = 1
    console.log(jugadaUsuario)
    btnPapel.disabled = true
    btnTijera.disabled = true
    if(jugadaCompu == jugadaUsuario){
        divParaAlert.innerHTML = `Empate!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 2){
        divParaAlert.innerHTML = `Pediste! El papel envuelve la piedra`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 3){
        divParaAlert.innerHTML = `Ganaste! La piedra aplasta a la tijera!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    btnInicia.disabled = false;
    btnInicia.innerHTML = `Jugar de nuevo`
    btnInicia.className = `btn btnRosa`
}

function eligePapel(){
    jugadaUsuario = 2
    console.log(jugadaUsuario)
    btnPiedra.disabled = true
    btnTijera.disabled = true
    if(jugadaCompu == jugadaUsuario){
        divParaAlert.innerHTML = `Empate!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 1){
        divParaAlert.innerHTML = `Ganaste! El papel envuelve la piedra`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 3){
        divParaAlert.innerHTML = `Perdiste! La tijera corta el papel!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    btnInicia.disabled = false;
    btnInicia.innerHTML = `Jugar de nuevo`
    btnInicia.className = `btn btnRosa`
}

function eligeTijera(){
    jugadaUsuario = 3
    console.log(jugadaUsuario)
    btnPiedra.disabled = true
    btnPapel.disabled = true
    if(jugadaCompu == jugadaUsuario){
        divParaAlert.innerHTML = `Empate!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 1){
        divParaAlert.innerHTML = `Peridste! La piedra aplasta la tijera!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    if (jugadaCompu == 2){
        divParaAlert.innerHTML = `Ganaste! La tijera corta el papel!`
        divParaAlert.className = `text-center mt-2 alert alertRosa`
    }
    btnInicia.disabled = false;
    btnInicia.innerHTML = `Jugar de nuevo`
    btnInicia.className = `btn btnRosa`
}