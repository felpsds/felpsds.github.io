const Keyboard = {

    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: true
    },

    init() {
        var item = random();
        // Create main elements

        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        // Setup main elements

        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
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
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this._triggerEvent("oninput");
                        awnser = document.querySelector("textarea.use-keyboard-input").value;
                        if(awnser == item){
                            console.log("Acertou!");
                        }else{
                            console.log("HMM, alguma coisa está errada, tente novamente..")
                        }
                        
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

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
    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};
window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
var guessed = 0
var imgs = 0;
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
                document.querySelector("h1").innerHTML = "VOCÊ GANHOU";
                document.getElementById("container").style.display = "none";
                document.querySelector(`[class="keyboard"]`).style.display = "none";
            }
        }
    }else{
        document.querySelector("img").src = "../Img/Sprites/Final.png";
        document.querySelector("h1").innerHTML = "Você perdeu";
        document.getElementById("container").style.display = "none";
        document.querySelector(`[class="keyboard"]`).style.display = "none";
    }
}
function verify(key){
    const size = item.length;
    const indexes = [...item.matchAll(new RegExp(key, 'gi'))].map(a => a.index);
    var contain = item.indexOf(key);
    run(contain,key,indexes);
}
