const imgs = document.getElementById("cardid");

const img = document.querySelectorAll("#cardid .e_cardcontent");

let index = 0;

function run(){
    index++;

    console.log("#cardid .e_cardcontent");

    if (index > img.length-1){
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 27.5}vw)`;

    setTimeout(run,2000);
}

run();

const idselect = document.querySelectorAll(".e_base #a")