const data = [
    {
        "name": "corgi",
        "image": "./corgi.jpg",
        "hind": 900
    },
    {
        "name": "chow-chow",
        "image": "./corgi.jpg",
        "hind": 870
    },
    {
        "name": "taks",
        "image": "./corgi.jpg",
        "hind": 100
    },
    {
        "name": "tõug1",
        "image": "./corgi.jpg",
        "hind": 1000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 2000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 500
    },
    {
        "name": "corgi",
        "image": "./corgi.jpg",
        "hind": 900
    },
    {
        "name": "chow-chow",
        "image": "./corgi.jpg",
        "hind": 870
    },
    {
        "name": "taks",
        "image": "./corgi.jpg",
        "hind": 100
    },
    {
        "name": "tõug1",
        "image": "./corgi.jpg",
        "hind": 1000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 2000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 500
    },
    {
        "name": "corgi",
        "image": "./corgi.jpg",
        "hind": 900
    },
    {
        "name": "chow-chow",
        "image": "./corgi.jpg",
        "hind": 870
    },
    {
        "name": "taks",
        "image": "./corgi.jpg",
        "hind": 100
    },
    {
        "name": "tõug1",
        "image": "./corgi.jpg",
        "hind": 1000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 2000
    },
    {
        "name": "tõug",
        "image": "./corgi.jpg",
        "hind": 500
    }
];

const mineKontaktiLehele = () => {
    location.href = 'kontakt.html';

};

$(() => {

    data.forEach(koer => {
        $("#kast").append(
            `<div class="koera-objekt">
                    <div>${koer.name}</div>
                    <img alt="Siin on koer 🤓" class="koera-pilt" src="./assets/corgi.jpg">
                    <div>${koer.hind} €</div>
                    <button onclick="mineKontaktiLehele()" >Tellima</button>
            </div>`
        );

    })
});
