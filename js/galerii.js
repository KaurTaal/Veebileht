//Andmed galerii jaoks

const pildid = [
    {
        'pilt': "./andmed/corgi.jpg"
    },
    {
        'pilt': "andmed/bern_cc.jpg"
    },
    {
        'pilt': "andmed/tibetan_mastiff_cc.jpg"
    },
    {
        'pilt': "andmed/merle_cc.jpg"
    },
    {
        'pilt': "andmed/bern2_cc.jpg"
    },
    {
        'pilt': "andmed/mastiff_taust_cc.jpg"
    },
    {
        'pilt': "andmed/merle2_cc.jpg"
    },
    {
        'pilt': "andmed/entlebuhh_cc.jpg"
    },
    {
        'pilt': "andmed/merle_taust_cc.jpg"
    },
    {
        'pilt': "andmed/husky_cc.jpg"
    },
    {
        'pilt': "andmed/german-shepherd.jpg"
    },
    {
        'pilt': "andmed/taks.jpg"
    },
    {
        'pilt': "andmed/golden-retriever.jpg"
    },
    {
        'pilt': "andmed/husky.jpg"
    },
    {
        'pilt': "andmed/bulldog.jpg"
    },
    {
        'pilt': "andmed/samoyed.jpg"
    },
    {
        'pilt': "andmed/pug.jpg"
    },
    {
        'pilt': "andmed/pug.jpg"
    },
    {
        'pilt': "andmed/pug.jpg"
    },
    {
        'pilt': "andmed/pug.jpg"
    },
    {
        'pilt': "andmed/pug.jpg"
    },
];

//Loob jupi koodi iga pildi jaoks.
$(() => {

    pildid.forEach(pildike => {
        $("#kast").append(
            `<div class="pildikesed">
                <img alt="Siin on koer 🤓" class="koerake" src=${pildike.pilt}>
                </div>`
        );
    })
});