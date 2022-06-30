function nighton(){
    dark = true

    document.querySelector("body").style.background = "#2f3136";
    document.querySelector("body").style.color =  "#ffffff"
    document.getElementById("menu-area").style.background = "#202225";
    document.getElementById("menu-area").style.borderBottom = '2px solid rgba(0, 0, 0, 0.6)'
    document.getElementById("menu-area").style.boxShadow = '0px 2.5px 6px rgba(0, 0, 0, 0.5)'
    document.querySelector("ul").style.color =  "#ffffff";

    document.getElementById("sec1").style.backgroundColor = "#2f3136"
    document.getElementById("sec3").style.backgroundColor = "#2f3136"
    document.getElementById("sec4").style.backgroundColor = "#2f3136"

    document.getElementById("themeimg").src ="../MyProject/main/Icones/lightmode.png";
    document.querySelector("#hovertm.sgbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, 0.80) 50%)";
    document.querySelector("#hovertm.scbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, 0.80) 50%)";
    document.querySelector("#hovertm.wfbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, 0.80) 50%)";
    const lista = document.querySelectorAll("a");
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.color = "#ffffff";
    }

}

function nightoff(){
    dark = false;
    document.querySelector("body").style.background = "#FFFFFF";
    document.querySelector("body").style.color =  "#000000"
    document.getElementById("menu-area").style.background = "#FFFFFF";
    document.getElementById("menu-area").style.borderBottom = '2px solid rgba(0, 0, 0, 0.6)'
    document.getElementById("menu-area").style.boxShadow = '0px 2.5px 6px rgba(0, 0, 0, 0.5)'
    document.querySelector("ul").style.color =  "#000000";

    document.getElementById("sec1").style.backgroundColor = "#F5F5F5"
    document.getElementById("sec3").style.backgroundColor = "#F5F5F5"
    document.getElementById("sec4").style.backgroundColor = "#F5F5F5"

    document.getElementById("themeimg").src ="../MyProject/main/Icones/darkmode.png";
    document.querySelector("#hovertm.sgbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(255, 255, 255, 0.90) 50%)";
    document.querySelector("#hovertm.scbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(255, 255, 255, 0.90) 50%)";
    document.querySelector("#hovertm.wfbox").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%,rgba(255, 255, 255, 0.90) 50%)";
    const lista = document.querySelectorAll("a");
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.color = "#000000";
    }
}
dark = true;
function themecheck(){
    
    if (dark == false ){
        console.log("Dark on")
        nighton()
    }else{
        console.log("Dark off")
        nightoff()
    }
}
