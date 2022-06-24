function saveCookies(option){
    document.getElementById("lgpd_cookie").style.display = "none";
    if(option == true){
        document.cookie = "cookieAlert= " + option + ";" + ";path=/";
    } else {
        console.log("Not Confirmed!")
    }
}
function checkCookie(){
    user = getCookie("cookieAlert");
    lang = getCookie("lang");
    if(user != ''){
        document.getElementById("lgpd_cookie").style.display = "none";
    }
    if(lang == ''){
        document.cookie = "lang= " + "pt_br" + ";" + ";path=/";
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

function langmenu(){
    hidden = document.querySelectorAll("a.hidden");
    if(hidden.length == 0){
        open = document.querySelectorAll("a.open");
        document.querySelector("a.selected").style.color = "#ff780c"
        for (i = 0; i < open.length; i++ ){
            document.querySelector("a.open").setAttribute("class", "hidden" );
            document.querySelector("i.fa").setAttribute("id", "" );
        }
    } else {
        document.querySelector("a.selected").style.color = "#03a9f4"
        for (i = 0; i < hidden.length; i++ ){
            document.querySelector("a.hidden").setAttribute("class", "open" );
            document.querySelector("i.fa").setAttribute("id", "rotate" );
        }
    }
    
    
}
function getLang(lang){
    switch(lang){
        case 'pt_br':
            document.cookie = "lang= " + lang + ";" + ";path=/";  
            document.querySelector("a.selected").innerHTML = 'Linguagem &nbsp;<i class="fa fa-caret-down lightblue" aria-hidden="true"></i>'
            document.querySelector("input.start").src = "../Img/Play.png"
            document.querySelector("input.exit").src = "../Img/Exit.png"
            break;
        case 'en':
            document.cookie = "lang= " + lang + ";" + ";path=/";
            document.querySelector("a.selected").innerHTML = 'Language &nbsp;<i class="fa fa-caret-down lightblue" aria-hidden="true"></i>'
            document.querySelector("input.start").src = "../Img/Play1.png"
            document.querySelector("input.exit").src = "../Img/Quit.png"
            break;
        default:
            document.cookie = "lang= " + "pt_br" + ";" + ";path=/";
            break;
    }
}
    
    
