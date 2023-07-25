const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false


function flipCard(){
    if(lockBoard) return
    if(this == firstCard) return
    this.classList.add('flip')

    if(!hasFlippedCard){
        hasFlippedCard = true
        firstCard = this
    }else{
        hasFlippedCard = false
        secondCard = this

        if(firstCard.dataset.img === secondCard.dataset.img){
            removeEvent()
        }else{
            lockBoard = true
            unflipCard()
        }
    }
}

function removeEvent(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

function unflipCard(){
    setTimeout(() => {
        lockBoard = false
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1500);
}

(function setRandomCard(){
    cards.forEach(card => {
        let randomIndex = Math.floor(Math.random() * 12)
        card.style.order = randomIndex
    })
})()

cards.forEach(card => card.addEventListener('click', flipCard))