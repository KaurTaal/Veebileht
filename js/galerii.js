const pildid = [
    {
        'pilt': "./assets/corgi1.jpg"
    },
    {
        'pilt': "assets/bern_cc.jpg"
    },
    {
        'pilt': "assets/tibetan_mastiff_cc.jpg"
    },
    {
        'pilt': "assets/merle_cc.jpg"
    },
    {
        'pilt': "assets/bern2_cc.jpg"
    },
    {
        'pilt': "assets/mastiff_taust_cc.jpg"
    },
    {
        'pilt': "assets/merle2_cc.jpg"
    },
    {
        'pilt': "assets/entlebuhh_cc.jpg"
    },
    {
        'pilt': "assets/merle_taust_cc.jpg"
    },
    {
        'pilt': "assets/husky_cc.jpg"
    },
    {
        'pilt': "assets/entlebuhh2_cc.jpg"
    },
    {
        'pilt': "assets/entlebuhh2_cc.jpg"
    },
    {
        'pilt': "assets/entlebuhh2_cc.jpg"
    },
    {
        'pilt': "assets/entlebuhh2_cc.jpg"
    }
];

$(() => {

    pildid.forEach(pildike => {
        $("#kast").append(
            `<div class="pildikesed">
                <img alt="Siin on koer 🤓" class="koerake" src=${pildike.pilt}>
                </div>`
        );
    })
});