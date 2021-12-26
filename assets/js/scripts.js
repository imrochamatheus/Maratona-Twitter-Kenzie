const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')
const feed = document.querySelector('.conteudoPrincipal__listaTweets')

function salvarTweet (event) {
    event.preventDefault()
    
    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea)
}

tweetar.addEventListener('click', salvarTweet)

function criarTweet (tweetTexto) {

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome: 'Daniel',
        foto: './assets/img/ProfilePic.png',
        usuario: '@danielkenzie',
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet)
}

function listarTemplateTweet (tweet) {
    
    const {nome, foto, usuario, texto, tempo} = tweet

    const li    = document.createElement('li')
    const img   = document.createElement('img')
    const div   = document.createElement('div')
    const h2    = document.createElement('h2')
    const span  = document.createElement('span')
    const p     = document.createElement('p')

    div.appendChild(h2)
    h2.innerText = nome

    div.appendChild(span)
    span.innerText = ` ${usuario} - ${tempo}`

    div.appendChild(p)
    p.innerText = texto

    li.appendChild(img)
    img.src = foto

    li.appendChild(div)



    li.classList.add('conteudoPrincipal__tweet')
    img.classList.add('tweet__fotoPerfil')
    div.classList.add('tweet__conteudo')
 


    feed.appendChild(li)
}


