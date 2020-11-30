//Andmed müügilehe jaoks

const data = [
    {
        "name": "Corgi",
        "image": "./andmed/corgi.jpg",
        "hind": 1000,
        "info": "Corgi on sportlik, südamlik ja üliarmas."
    },
    {
        "name": "Saksa lambakoer",
        "image": "./andmed/german-shepherd.jpg",
        "hind": 1000,
        "info": "Saksa lambakoer on jõuline, tugevate lihaste ja julge. Sobib suurepäraselt valvekoeraks."
    },
    {
        "name": "Taks",
        "image": "./andmed/taks.jpg",
        "hind": 1000,
        "info": "Taks on nutikas ja julge. Võib vahel olla jonnakas, kuid on inimese jaoks alati olemas."
    },
    {
        "name": "Kuldne retriiver",
        "image": "./andmed/golden-retriever.jpg",
        "hind": 1000,
        "info": "Kuulus oma läikiva kullakarva poolest. Väga sõbralik ning ei sobi valvekoeraks."
    },
    {
        "name": "Husky",
        "image": "./andmed/husky.jpg",
        "hind": 1000,
        "info": "Armastav ja heatahtlik. Saavad hästi läbi inimeste ja teiste koertega."
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
        "info": "Samojeedi koer on ergas ja rõõmus. Suurepärane kaaslane laste jaoks."
    },
    {
        "name": "Mops",
        "image": "./andmed/pug.jpg",
        "hind": 1000,
        "info": "Hoolimata suurusest on mopsid tugeva tahtega ja väga harva agressiivsed. Sobivad lastega peredele."
    }

];


//Tellima nupu vajutuse funktsioon
const mineKontaktiLehele = () => {
    location.href = 'kontakt.html';

};


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
                    <button id="btn" onclick="mineKontaktiLehele()" >Telli</button>
            </div>`
        );

    })
});


