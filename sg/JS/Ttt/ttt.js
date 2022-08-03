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
                check(i+1,j+1,p1,p2);
            });
        }
    }
}
round = "p1";jogada = 0;
map=[
    ["","",""],
    ["","",""],
    ["","",""]
];
async function check(c,l,p1,p2){
    botao = document.querySelector(".l"+l).querySelector(".c"+c);
    dis = document.querySelector(".l"+l).querySelector(".c"+c).disable;
    if(dis != true){
        switch (round){
            case "p1":
                document.querySelector(".l"+l).querySelector(".c"+c).disable = true;
                botao.style.backgroundImage = "url('/sg/Img/"+ p1+ ".svg')"
                round  = "p2"
                jogada++;
                map[l-1][c-1] = p1;
            break
            case "p2":
                document.querySelector(".l"+l).querySelector(".c"+c).disable = true;
                botao.style.backgroundImage = "url('/sg/Img/"+ p2+ ".svg')"
                round = "p1";
                jogada++;
                map[l-1][c-1] = p2;
            break
            
        }
        if(jogada >4 & jogada < 8){
            win = winnerCheck();
            if (win == true){
                console.log("Ganhou")
            }
        } else {
            if (jogada == 9){
                gameOvers();
            }
        }
    }  
}
function winnerCheck(){
    return false
}
function gameOvers(){
    document.getElementById("gameOver").style.display = "flex";
    document.getElementById("draw").style.display = "flex";
}
function restart(){
    location.reload();
}