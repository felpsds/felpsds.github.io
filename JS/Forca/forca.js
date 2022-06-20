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
    if(imgs < 5){
        if(contain == -1){
            img = imgs++;
            spriteimg = document.querySelector("img").src = "../Img/Sprites/"+imgs+".png";
        }else{
            for(var j = 0; j < indexes.length;j++){
                document.querySelector('[class="' + indexes[j]+'"]').innerHTML = key; 
            }
            guessed = indexes.length + guessed;
            if(guessed == item.length)
            {
                
                document.querySelector("img").src = "../Img/Sprites/Feliz.png";
                if(lang == "pt_br"){
                    document.querySelector("h1").innerHTML = "VOCÊ GANHOU";
                    document.querySelector("p").innerHTML = "A palavra era: "+ item;
                }else{
                    document.querySelector("h1").innerHTML = "YOU WIN!!";
                    document.querySelector("p").innerHTML = "The word was: "+ item;
                }
                
                document.getElementById("container").style.display = "none";
                document.querySelector(`[class="keyboard"]`).style.display = "none";
                
                document.querySelector("p").style.display = "grid";
            }
        }
    }else{

        if(lang == "pt_br"){
            document.querySelector("h1").innerHTML = "VOCÊ PERDEU";
            document.querySelector("p").innerHTML = "A palavra era: "+ item;
        }else{
            document.querySelector("h1").innerHTML = "YOU LOSE!!";
            document.querySelector("p").innerHTML = "The word was: "+ item;
        }

        document.querySelector("img").src = "../Img/Sprites/Final.png";
        document.getElementById("container").style.display = "none";
        document.querySelector(`[class="keyboard"]`).style.display = "none";
        document.querySelector("h1.resp").style.display = "grid"
    }
}
function verify(key){
    const size = item.length;
    const indexes = [...item.matchAll(new RegExp(key, 'gi'))].map(a => a.index);
    var contain = item.indexOf(key);
    run(contain,key,indexes);
};
