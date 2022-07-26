async function animation(){
    var frases = [
        "",
        "Oi, meu nome é",
        "Felipe dos Santos",
        "Eu sou um desenvolvedor Front-End"
    ]
    for(let j = 1; j < 4; j++){
        letras = '';
        local = document.querySelector(".p"+j);
        frase = frases[j];
        size = frases[j].length;
        console.log(size);
        for(let i = 0; i < size; i++){
            second = Math.floor(Math.random() * 120) + 60;
            await sleep(second);
            letras = letras + frase[i];
            local.innerHTML = letras;
        }
    }
    await sleep(200);
    document.getElementById("contact").style.opacity = 1
    document.getElementById("resume").style.opacity = 1
    

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

