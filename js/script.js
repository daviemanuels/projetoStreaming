/*
PASSO A PASSO

1) Criar card da temporada OK
2) Listar card OK
3) Criar card da temporada selecionada OK
4) Adicionar um evento para adicionar a temporada à fila de reprodução OK
5) Listar as temporadas selecionadas OK
6) Remover a temporada selecionada da fila de reprodução
7) Remover os filtros
*/

const container = document.querySelector(".main_vitrine")

const playlistContainer = document.querySelector(".main_playlist_principal")

let temporadasSelecionadas = []

// 1) Criar card da temporada
function cardPrincipal(temporada) {
    const article = document.createElement("article")
    article.classList.add("main_card")

    const mainCardTop = document.createElement("div")
    mainCardTop.classList.add("main_card_top")

    const h2 = document.createElement("h2")
    h2.innerText = temporada.nome

    const span = document.createElement("span")
    span.innerText = temporada.temporada

    const mainCardBottom = document.createElement("div")
    mainCardBottom.classList.add("main_card_bottom")

    const p = document.createElement("p")
    p.innerText = temporada.sinopse

    const button = document.createElement("button")
    button.innerText = "Adicionar à fila"
    button.id = temporada.id
    button.type = "button"

    mainCardTop.append(h2, span)
    mainCardBottom.append(p, button)
    article.append(mainCardTop, mainCardBottom)

    return article
}

// 2) Listar card
function listarTemporadas() {
    for (let i = 0; i < temporadas.length; i++) {
        let card = cardPrincipal(temporadas[i])
        container.appendChild(card)
    }
}

listarTemporadas()

// 3) Criar card da temporada selecionada
function cardTemporadaSelecionada(temporada) {
    const li = document.createElement("li")
    li.classList.add('main_playlist_li')

    const imgTemporada = document.createElement("img")
    imgTemporada.src = temporada.imagemIcone
    imgTemporada.alt = temporada.nome

    const playlistCenter = document.createElement("div")
    playlistCenter.classList.add("main_playlist_li_center")

    playlistCenter.insertAdjacentHTML("afterbegin", `
        <div>
            <h4>${temporada.nome}</h4>
            <span>${temporada.temporada}</span>
        </div>
        <div class="main_playlist_li_playButtom">
            <img src="imagens/play_icon.png" alt="">
            <span>Assistir agora</span>
        </div>
    `)

    const playlistEnd = document.createElement("div")
    playlistEnd.classList.add("main_playlist_li_right")

    const button = document.createElement("button")
    button.id = temporada.id

    playlistEnd.appendChild(button)

    li.append(imgTemporada, playlistCenter, playlistEnd)

    return li
}

// 4) Adicionar um evento para adicionar a temporada à fila de reprodução
container.addEventListener("click", selecionarTemporada)
function selecionarTemporada(event) {
    const elementoHTML = event.target
    console.log(elementoHTML)
    if (elementoHTML.tagName == "BUTTON") {
        const idTemporada = elementoHTML.id

        const temporadaEncontrada = temporadas.find((temporada) => temporada.id == idTemporada)

        temporadasSelecionadas.push(temporadaEncontrada)

        listarTemporadasSelecionadas()
    }
}

function listarTemporadasSelecionadas() {
    playlistContainer.innerHTML = ""
    for (let i = 0; i < temporadasSelecionadas.length; i++) {
        const card = cardTemporadaSelecionada(temporadasSelecionadas[i])
        playlistContainer.appendChild(card)
    }
}

playlistContainer.addEventListener("click", function(event) {
    const elementoHTML = event.target
    if (elementoHTML.tagName == "BUTTON") {
        elementoHTML.closest("li").remove()

    }
})
