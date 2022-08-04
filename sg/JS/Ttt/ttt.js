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
                winnerCheck(jogada,map,p1);
            break
            case "p2":
                document.querySelector(".l"+l).querySelector(".c"+c).disable = true;
                botao.style.backgroundImage = "url('/sg/Img/"+ p2+ ".svg')"
                round = "p1";
                jogada++;
                map[l-1][c-1] = p2;
                winnerCheck(jogada,map,p2);
            break
            
        }
        
    }  
}
win = false;
function winnerCheck(jogada,map,player){
    player = player.toUpperCase();
    if(jogada > 4 & jogada < 10){
        for(l=0;l<3;l++){
            // ---
            if(map[l][0] != "" && map[l][1] != ""){
                if(map[l][0] == map[l][1] & map[l][1] == map[l][2]){
                    console.log("Venceu!")
                    win = true
                }
            }
            // |||
            if(map[0][l] != "" && map[1][l] != ""){
                if(map[0][l] == map[1][l] & map[1][l] == map[2][l]){
                    console.log("Venceu!")
                    win = true
                }
            }
            // /
            if(map[0][2] != "" && map[2][0] != ""){
                if(map[0][2] == map[1][1] && map[1][1] == map[2][0]){
                    console.log("Venceu!")
                    win = true
                }
            }
            // \
            if(map[0][0] != "" && map[2][2] != ""){
                if(map[0][0] == map[1][1] && map[1][1] == map[2][2]){
                    console.log("Venceu!")
                    win = true
                }
            }
        }

        if(win == true){
            gameOvers(true,player);
        } else if (win == false & jogada == 9){
            gameOvers(false,player);
        }
    }
}
function gameOvers(state,p){
    windiv = document.getElementById("win");
    document.getElementById("gameOver").style.display = "flex";
    if(state == true){
        windiv.innerText = "O ganhador foi: " + p;
        windiv.style.display = "flex";

    } else {
        document.getElementById("draw").style.display = "flex";
    }
    
}
function restart(){
    location.reload();
}