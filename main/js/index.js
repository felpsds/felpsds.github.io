function nighton(){
    dark = true
    document.querySelector("body").style.background = "#2f3136";
    document.querySelector("body").style.color =  "#ffffff"
    document.getElementById("menu-area").style.background = "#202225";
    document.querySelector("ul").style.color =  "#FFFFFF";
    document.getElementById("themes").src ="../MyProject/main/Icones/lightmode.png";
    document.getElementById("menuicon").src = "../MyProject/main/Icones/menudark.png";

}

function nightoff(){
    dark = false;
    document.querySelector("body").style.background = "#FFFFFF";
    document.querySelector("body").style.color =  "#000000"
    document.getElementById("menu-area").style.background = "#eeeeee";
    document.querySelector("ul").style.color =  "#000000";
    document.getElementById("themes").src ="../MyProject/main/Icones/darkmode.png";
    document.getElementById("menuicon").src = "../MyProject/main/Icones/menulight.png";
    

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
