const Keyboard = {

    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },
    eventHandlers: {
        oninput: null
    },
    properties: {
        value: "",
    },
    init(){
        var item = random();
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["P", "L"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                default:
                    keyElement.textContent = key.toUpperCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                        keyElement.disabled = true;
                        verify(key);
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },
};
window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
var guessed = 0;
var imgs = 0;
lang = getCookie("lang");
function run(contain,key,indexes){
    if(contain == -1){
            img = imgs++;
            spriteimg = document.querySelector("img").src = "../Img/Sprites/"+imgs+".png";
        }else{
            for(var j = 0; j < indexes.length;j++){
                document.querySelector('[class="' + indexes[j]+'"]').innerHTML = key; 
            }
            guessed = indexes.length + guessed;
    }
    if(lang == 'en'){
        document.querySelector("h1").innerHTML = "Hangman";
    }

    if(guessed == item.length || imgs > 5){
        document.getElementById("gameOver").style.display = "flex";
        document.getElementById("resp").style.display = "block";
        switch(lang){
            case 'pt_br':
                document.getElementById("resp").innerHTML = "A palavra era: " + item;
                if(guessed == item.length){
                    document.getElementById("win").style.display = "block";
                }else{
                    document.getElementById("lose").style.display = "block";
                }
            break;
            case 'en':
                document.getElementById("resp").innerHTML = "The word was: " + item;
                if(guessed == item.length){
                    document.getElementById("win").style.display = "block";
                    document.getElementById("win").innerHTML = "YOU WIN!!";

                }else{
                    document.getElementById("lose").style.display = "block";
                    document.getElementById("lose").innerHTML = "YOU LOSE!!";
                }
            break;
        }
    }
}

function verify(key){
    const size = item.length;
    const indexes = [...item.matchAll(new RegExp(key, 'gi'))].map(a => a.index);
    var contain = item.indexOf(key);
    run(contain,key,indexes);
};

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
function restart(){
    location.reload();
}
