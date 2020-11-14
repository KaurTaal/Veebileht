
//Andmed müügilehe jaoks

const data = [
    {
        "name": "Corgi",
        "image": "./assets/corgi1.jpg",
        "hind": 900,
        "info": "The Corgi personality ranges from happy, smart, fun-loving, loyal, stubborn, and playful."
    },
    {
        "name": "Chow-Chow",
        "image": "./assets/chow-chow.jpg",
        "hind": 870,
        "info": "Chows are powerful, compactly built dogs standing as high as 20 inches at the shoulder."
    },
    {
        "name": "Taks",
        "image": "./assets/taks.jpg",
        "hind": 1000,
        "info": "The Dachshund is described as clever, lively, and courageous to the point of rashness."
    },
    {
        "name": "Golden Retriever",
        "image": "./assets/golden-retriever.jpg",
        "hind": 1000,
        "info": "The golden retriever is even-tempered, intelligent and affectionate."
    },
    {
        "name": "Husky",
        "image": "./assets/husky.jpg",
        "hind": 2000,
        "info": "Siberian Huskies are free-spirited and typically good-natured with people. "
    },
    {
        "name": "Bulldog",
        "image": "./assets/bulldog.jpg",
        "hind": 2000,
        "info": "The Bulldog is a kind, affectionate, courageous dog with a tendency to be stubborn at times."
    },
    {
        "name": "Samoyed",
        "image": "./assets/samoyed.jpg",
        "hind": 2000,
        "info": "Temperament: Adaptable, Friendly, Gentle."
    },
    {
        "name": "Pug",
        "image": "./assets/pug.jpg",
        "hind": 2000,
        "info": "Pugs are happy and affectionate, loyal and"
    }

];


//Tellima nupu vajutuse funktsioon
const mineKontaktiLehele = () => {
    location.href = 'kontakt.html';

};

//Kasutab jqueri
$(() => {

    data.forEach(koer => {
        $("#kast").append(
            `<div class="koera-objekt">
                    <div>${koer.name}</div>
                    <img alt="Siin on koer 🤓" class="koera-pilt" src=${koer.image}>
                    <div class="info" >
                        <div class="sisu" >
                        <h2>${koer.name}</h2>
                            <div class="tekst"
                                <p>${koer.info}</p>
                            </div>
     
                        </div>
                    </div>
                    <div>${koer.hind} €</div>
                    <button id="btn" onclick="mineKontaktiLehele()" >Tellima</button>
            </div>`
        );

    })
});
