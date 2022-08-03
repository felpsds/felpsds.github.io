async function create(){
    main = document.querySelector(".main");
    for(let i=1; i < 4; i++){
        line = document.querySelector(".l"+ i)
        for(let j=0; j < 3; j++){
            div = document.createElement('button')
            line.appendChild(div).setAttribute('class', 'c' + (j+1));
        }
    }
    let colunas = []
    for(let i=1; i < 4; i++){       
        colunas[i-1] = document.querySelectorAll('.c' + i);
    }
    coc = document.querySelectorAll(".imgs img");
    for(let i=0; i < 2; i++){
        coc[i].addEventListener('click', function handleClick() {
            switch(i){
                case 0:
                    p1 = "x"
                    p2 = "o"
                break
                case 1:
                    p1 = "o"
                    p2 = "x"
                break
            }
            document.querySelector(".select").style.display = "none";
        });
    }
    
    for(let i=0; i < 3; i++){
        for(let j=0; j < 3; j++){
            colunas[i][j].addEventListener('click', function handleClick() {
                console.log("O botao clicado foi: linha " + (j+1) + " coluna " + (i+1));
                check(i+1,j+1,p1,p2);
            });
        }
    }
}
round = "p1";
async function check(c,l,p1,p2){
    botao = document.querySelector(".l"+l).querySelector(".c"+c);
    dis = document.querySelector(".l"+l).querySelector(".c"+c).disable;
    console.log(dis)
    if(dis != true){
        switch (round){
            case "p1":
                document.querySelector(".l"+l).querySelector(".c"+c).disable = true;
                botao.style.backgroundImage = "url('/sg/Img/"+ p1+ ".svg')"
                round  = "p2"
            break
            case "p2":
                document.querySelector(".l"+l).querySelector(".c"+c).disable = true;
                botao.style.backgroundImage = "url('/sg/Img/"+ p2+ ".svg')"
                round = "p1";
            break
        }
    }

    
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}