//Andmed müügilehe jaoks

const data = [
    {
        "name": "Corgi",
        "image": "./andmed/corgi.jpg",
        "hind": 1000,
        "info": "Energilisus, rõõmsameelsus, vastupidavus ja arukus teevad Corgist usaldusväärse, kindla ja valvsa sõbra."
    },
    {
        "name": "Saksa lambakoer",
        "image": "./andmed/german-shepherd.jpg",
        "hind": 1000,
        "info": "Saksa lambakoer on jõuline, tugevate lihaste, tiheda karvkatte ja ülihea haistmismeelega."
    },
    {
        "name": "Taks",
        "image": "./andmed/taks.jpg",
        "hind": 1000,
        "info": "Taks on truu koer, kes valib perest välja ühe inimese, keda ta erilise hoolega hoiab."
    },
    {
        "name": "Kuldne retriiver",
        "image": "./andmed/golden-retriever.jpg",
        "hind": 1000,
        "info": "Sõbraliku ja leebe iseloomu tõttu ei sobi ta valvekoeraks, kuid on väga populaarne lemmikloom."
    },
    {
        "name": "Husky",
        "image": "./andmed/husky.jpg",
        "hind": 1000,
        "info": "Husky on tuntud oma hea iseloomu poolest ja ta sobib suurepäraselt perekoeraks."
    },
    {
        "name": "Buldog",
        "image": "./andmed/bulldog.jpg",
        "hind": 1000,
        "info": "Buldog on rahuliku iseloomuga ja haugub harva."
    },
    {
        "name": "Samojeed",
        "image": "./andmed/samoyed.jpg",
        "hind": 1000,
        "info": "Samojeedi koer on sõbralik, avatud, reibas ja elav ning mõõdukalt arenenud jahikirega."
    },
    {
        "name": "Mops",
        "image": "./andmed/pug.jpg",
        "hind": 1000,
        "info": "Iseloomult on mopsid stabiilse, tasakaaluka temperamedi ja vallatult sõbraliku iseloomuga."
    }

];


//Tellima nupu vajutuse funktsioon
const mineKontaktiLehele = () => {
    location.href = 'kontakt.html';

};


//Kasutab jqueri
//Loob iga koera jaoks jupi htmli koodi
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

