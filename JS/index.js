async function animation(lang){
    document.querySelector(".lagchange").style.display = "none";
    document.getElementById("contact").style.opacity = 0
    document.getElementById("resume").style.opacity = 0
    
    var frases_br = [
        "",
        "Oi, meu nome é",
        "Felipe dos Santos",
        "Eu sou um desenvolvedor Front-End!"
    ]
    var frases_en = [
        "",
        "Hi, my name is",
        "Felipe dos Santos",
        "I'm Front-End Developer!"
    ]
    for(let j = 1; j < 4; j++){
        letras = '';
        local = document.querySelector(".p"+j);
        switch (lang){
            case "en":
                frase = frases_en[j];
                size = frases_en[j].length;
            break;
            default:
                frase = frases_br[j];
                size = frases_br[j].length;
            break;
        }
        
        
        for(let i = 0; i < size; i++){
            second = Math.floor(Math.random() * 61) + 30;
            await sleep(second);
            letras = letras + frase[i];
            local.innerHTML = letras;
        }
    }
    await sleep(200);
    document.getElementById("contact").style.opacity = 1
    document.getElementById("resume").style.opacity = 1
    document.querySelector(".lagchange").style.display = "flex";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeLang(lang){
    menu = document.querySelectorAll(".menubtn");
    switch (lang){
        case "pt_br":
            fetch("language.json")
                .then(Response => Response.json())
                .then(data => {
                    for(i = 0; i<5; i++){
                       toreplace = data.pt_br.header[i];
                        menu[i].innerHTML = toreplace;
                    }
                    document.getElementById("contatos").innerHTML = data.pt_br.footer.title;
        })
        animation("pt_br");
        break;

        case "en":
            fetch("language.json")
                .then(Response => Response.json())
                .then(data => {
                for(i = 0; i<5; i++){
                    toreplace = data.en.header[i];
                    menu[i].innerHTML = toreplace;
                }
                document.getElementById("contatos").innerHTML = data.en.footer.title;

        })
        animation("en");
        break;
    }
}

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
    if(user == ''){
        document.getElementById("lgpd_cookie").style.display = "flex";
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

