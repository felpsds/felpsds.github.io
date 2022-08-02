function saveCookies(){
    document.querySelector(".lgpd_alert").style.display = "none"
    document.cookie = "cookieAlert= " + "true" + ";" + ";path=/";
}
function checkCookie(){
    user = getCookie("cookieAlert");
    lang = getCookie("lang");
    if(lang == ''){
        document.cookie = "lang= " + "pt_br" + ";" + ";path=/";
    }
    if(user == ''){
        document.querySelector(".lgpd_alert").style.display = "flex"
    }
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
activate = false
function langchange(){
    btn = document.querySelector(".lagchange");
    lista = document.querySelectorAll(".lagchange a");
    if (activate == false){
        btn.classList.add("active");
        lista[0].classList.add("show");
        lista[1].classList.add("show");;
        activate = true;
    } else {
        btn.classList.remove("active");
        lista[0].classList.remove("show");
        lista[1].classList.remove("show");
        activate = false;
    }

    
}
function getLang(lang){
    btn = document.querySelectorAll(".btn");
    switch(lang){
        case 'pt_br':
            document.cookie = "lang= " + lang + ";" + ";path=/";  
            btn[0].src = "/sg/Img/Jogar.svg"
            btn[1].src = "/sg/Img/SAIR.svg"

            console.log(lang)
        break;
        case 'en':
            document.cookie = "lang= " + lang + ";" + ";path=/";
            btn[0].src = "/sg/Img/PLAY.svg"
            btn[1].src = "/sg/Img/QUIT.svg"
            console.log(lang)
        break;
        default:
            document.cookie = "lang= " + "pt_br" + ";" + ";path=/";
        break;
    }
}
    
    
