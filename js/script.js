// Estado de la APP
let STATE = {
    currentWord: "", // Aquí debemos guardar el resultado de getNextWord()
    currentProgressWord: 0, // indica cual es la siguiente posición del "currentWord" a procesar

    // Si le pasas una letra, te dice si esa letra va justamente en la posición 'currentProgressWord'
    isCorrectLetter: function (inputLetter) {
        return this.currentWord[STATE.currentProgressWord] == inputLetter;
    },

    // Nos indica si hemos escrito ya toda la letra
    isWordFinished: function () {
        return this.currentProgressWord == this.currentWord.length;
    }
}

// Paso 1: al hacer click en el botón empezar, obtener la primera palabra a procesar. Debemos también ocultar el botón de empezar y mostrar el contenedor con la palabra a escribir. Añadir el listener de teclado

 document.querySelector("button").addEventListener("click", start);


function start(){
    document.querySelector("button").style.display="none";   
    document.querySelector("#next-word-card").classList.remove("w3-hide");
    displayNewWord();
    document.addEventListener('keydown', checkWord);
};

function displayNewWord(){
    STATE.currentWord = getNextWord();
    console.log("New word:",STATE.currentWord);
    document.querySelector("#next-word").innerHTML=STATE.currentWord;    
}

function checkWord(event){
    if((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode==192 ){
        if (STATE.isCorrectLetter(event.key)) {
            console.log(STATE.currentWord);
            STATE.currentProgressWord++;
            console.log(STATE.currentProgressWord);
            console.log(STATE.currentWord.length);
        }
        console.log(STATE.isWordFinished);
        

    }
}