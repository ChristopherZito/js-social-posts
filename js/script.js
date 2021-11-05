// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.




let like ;
let date ;
let imgRand ;


//creazione array di post
const post = [
    {
        "nomeAutore":"Gianni Panni",
        "fotoProfilo":"https://unsplash.it/300/300?image=",
        "data":date,
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagineBase":"https://unsplash.it/300/300?image=",
        "numeroLike":like,
    },
    {
        "nomeAutore":"Paldi Giandi",
        "fotoProfilo":"https://unsplash.it/300/300?image=",
        "data":date,
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagineBase":"https://unsplash.it/300/300?image=",
        "numeroLike":like,
    },
    {
        "nomeAutore":"Poldo Sordo",
        "fotoProfilo":"https://unsplash.it/300/300?image=",
        "data":date,
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "numeroLike":like,
    },
]


const inPage = document.getElementById("container");
for(let i = 0; i < post.length; i++){
    // console.log(post[i]);

    //creazione data e like casuale
    like = Math.floor(Math.random()* 100) + 20;
    post[i].numeroLike = like;
    date = Math.floor(Math.random()* 12) + 1;
    post[i].data = date;

    imgRand = Math.floor(Math.random()* 380) + 1;
    

    const {nomeAutore, fotoProfilo, data, testoPost,numeroLike} = post[i];
    //console.log(nomeAutore, fotoProfilo, data, testoPost,numeroLike);

    //inserire l' immagine se provvista
    const {immagineBase} = post[i];
    //console.log(immagineBase); se non è presente torna undefined

    //testo html da inserire nel file
    if(immagineBase !== undefined){
        //console.log("l'immagine c'e"); conferma l'ingresso nell'if
        //console.log(immagineBase); restituisce l'url dell'immagine
        var postUser = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${fotoProfilo}${imgRand}" alt="${nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutore}</div>
                        <div class="post-meta__time">${data}mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__image">
                <img src="${immagineBase}${imgRand}" alt=""></img>
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" id="${i}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numeroLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }else {
        var postUser = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${fotoProfilo}${imgRand}" alt="${nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutore}</div>
                        <div class="post-meta__time">${data}mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__image">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" id="${i}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numeroLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }

    inPage.innerHTML += postUser;
    
}
for(let i = 0; i < post.length; i++){
    //mettere like
    const button = document.getElementById(i);
    const btn = document.querySelector(".like-button__label");
    const icon = document.querySelector(".like-button__icon");
    console.log(button);

    button.addEventListener("click", function(){
        console.log("hai messo like");
        btn.classList.replace("like-button__label" , "like-button--liked")
        /* icon.style.color = "green"; */
        like++;
        console.log(like);
    })
}
