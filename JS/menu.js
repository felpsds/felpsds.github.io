function saveCookies(option){
    document.getElementById("lgpd_cookie").style.display = "none";
    
    if(option = true){
        document.cookie = "cookie = " + option + ";path=/";
        alert(document.cookie)
    }
}