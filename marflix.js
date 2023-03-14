
window.addEventListener("scroll", () => {
    const img = document.querySelector("div.bas a img");
    const a = document.querySelector("div.bas a ");
    const p = document.querySelectorAll("div.description p");
    const tech1 = document.querySelector("div.un");
    const tech2 = document.querySelector("div.deux");
    const tech3 = document.querySelector("div.trois");
    const tech4 = document.querySelector("div.quatre");
    const tech5 = document.querySelector("div.cinq");
    const tech6 = document.querySelector("div.six");
    const tech7 = document.querySelector("div.sept");
    const proj1 = document.querySelector("div.one");
    const proj2 = document.querySelector("div.two");
    const proj3 = document.querySelector("div.three");
    let scrolly = window.scrollY;

    if (scrolly >= '300') {
        img.setAttribute("src", "/images 2/logo_haut.png");
        a.setAttribute("href", "#top");
    } else {
        img.setAttribute("src", "/images 2/logo_bas.png");
        a.setAttribute("href", "#ancre1");
    }
    if (scrolly >= '450') {
        for (var i = 0; i < p.length; i++)
            p[i].classList.replace('noreveal', 'reveal');
        ;
    }
    if (scrolly >= '1220') {
        tech1.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '1395') {
        tech2.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '1520') {
        tech3.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '1640') {
        tech4.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '1772') {
        tech5.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '1882') {
        tech6.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '2000') {
        tech7.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '2350') {
        proj1.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '2925') {
        proj2.classList.replace('noreveal', 'reveal');
    }
    if (scrolly >= '3380') {
        proj3.classList.replace('noreveal', 'reveal');
    }
});


let images = ["stylo.jpg", "fdedark.jpg", "bureau.jpg"];
let count = 0;

function changeBack() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }
    let background = document.querySelector('section.idk');
    background.style.backgroundImage = 'url(/images/' + images[count] + ')';
}
setInterval(changeBack, 15000);

const tel = document.querySelector("#num");
const mail = document.querySelector("#mail");
count = 0;
tel.addEventListener("click", () => {
    const telo = "07-87-47-39-11";
    const span = document.querySelector('.t');
    span.innerText = telo;
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }

});
mail.addEventListener('click', () => {
    const mail = "martial.geraud@gmail.com";
    const span = document.querySelector('.m');
    span.innerText = mail;
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
});

const burgeur = document.querySelector(".burgeur");

burgeur.addEventListener("click", () => {
    const li = document.querySelectorAll(".item");
    li.forEach(item => {
        if (item.style.display == "list-item") {
            item.style.display = "none"
        } else {

            item.style.display = "list-item"
        }
    });
});

const nav = document.querySelector("nav")

window.addEventListener("change", () => {
    console.log("test");
    const li = document.querySelectorAll(".item");
    li.forEach(item => {
        if (window.innerWidth > 826) {
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }
    })

})


