function nighton(){
    dark = true
    document.querySelector("body").style.background = "#2f3136";
    document.querySelector("body").style.color =  "#ffffff"
    document.getElementById("menu-area").style.background = "#202225";
    document.querySelector("ul").style.color =  "#FFFFFF";
    document.getElementById("themes").src ="../TGP/icons/lightmode.png";
    document.getElementById("menuicon").src = "../TGP/icons/menudark.png";

}

function nightoff(){
    dark = false;
    document.querySelector("body").style.background = "#FFFFFF";
    document.querySelector("body").style.color =  "#000000"
    document.getElementById("menu-area").style.background = "#eeeeee";
    document.querySelector("ul").style.color =  "#000000";
    document.getElementById("themes").src ="../TGP/icons/darkmode.png";
    document.getElementById("menuicon").src = "../TGP/icons/menulight.png";
    

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

function menuToggle(){
    let menuarea = document.getElementById("menu-area");

    if(menuarea.classList.contains('menu-opened')== true) {
        menuarea.classList.remove('menu-opened');
        
    }else{
        menuarea.classList.add('menu-opened');
    }
}