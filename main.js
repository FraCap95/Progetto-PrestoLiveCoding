// NAVBAR
let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbarCust")
    }else {
        navbar.classList.remove("navbarCust")
    }
})

// COUNTER
let articlesNumber = document.querySelector("#articlesNumber");
let usersNumber = document.querySelector("#usersNumber");
let productsNumber = document.querySelector("#productsNumber");

function createInterval(finalN, elemento, frequenza){
    let counter = 0;
    let interval = setInterval( ()=>{
    if(counter < finalN){
        counter++
        elemento.innerHTML = counter;
    } else {
        clearInterval(interval)
    }
    }, frequenza)
}

let isEntered = false;
let observer = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isEntered == false){
            createInterval(1000, articlesNumber, 5)
            createInterval(500, usersNumber, 10)
            createInterval(120, productsNumber, 20)
            isEntered = true;
        }
    })
},  { threshold: 1 })
observer.observe(articlesNumber);

// cards
let annunci = [
    {nome: "Nintendo Wii", categoria: "Console", anno:"2006", prezzo: 30, url: "https://picsum.photos/200"},
    {nome: "Mario Kart Deluxe 8", categoria: "Videogame", anno:"2014",prezzo: 15, url: "https://picsum.photos/201"},
    {nome: "Pokémon Rosso", categoria: "Videogame", anno:"1996", prezzo: 50, url: "https://picsum.photos/202"},
    {nome: "PS 5", categoria: "Console", anno:"2023", prezzo: 300, url: "https://picsum.photos/203"},
    {nome: "Game Boy Color", categoria: "Console", anno:"1990", prezzo: 150, url: "https://picsum.photos/204"},
]

let annunciWrapper = document.querySelector("#annunciWrapper")

annunci.forEach((annuncio, i)=>{
    if(i >= annunci.length - 3){
        let div = document.createElement("div")
        div.classList.add("col-12", "col-md-4", "col-lg-3", "my-5" )
        div.innerHTML = `
            <div class="card">
                <div class="overflow-hidden">
                    <img src="${annuncio.url}" class="card-img-top transition" alt="...">
                </div>
                <span class="badge position-absolute top-0 start-100 translate-middle badge rounded-pill ">NEW</span>
                <div class="card-body">
                <h5 class="card-title">${annuncio.nome}</h5>
                <p class="card-text">${annuncio.categoria}</p>
                <p class="card-text">${annuncio.anno}</p>
                <p class="card-text fw-bold">Prezzo: ${annuncio.prezzo}€</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn fucsia">Aggiungi al carrello</a>
                    <i class="bi bi-heart fs-4 align-items-center"></i>
                </div>
                <p class="card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        `
        annunciWrapper.appendChild(div)
    } 
})

let hearts = document.querySelectorAll(".bi-heart");
hearts.forEach((heart)=>{

    heart.addEventListener("click", ()=>{
        heart.classList.toggle("bi-heart")
        heart.classList.toggle("bi-heart-fill")
        heart.classList.toggle("text-danger")
    })
})

// SWIPER 
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination"
    }
});