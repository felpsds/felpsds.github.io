function saveCookies(option){
    document.getElementById("lgpd_cookie").style.display = "none";
    
    if(option == true){
        document.cookie = "cookieAllow= " + option + ";" + ";path=/";
    } else {
        console.log(option + " definida")
    }
    
}
function checkCookie(){
    let user = getCookie("cookieAllow");
    if(user != ""){
        document.getElementById("lgpd_cookie").style.display = "none";
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
