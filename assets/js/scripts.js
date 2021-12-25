const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')

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

    listarTweet(tweet)
}

function listarTweet (tweet) {

}


