const cardsColor = ["red", "red", "green", "green",
"blue", "blue", "brown", "brown", "yellow", "yellow",
"gray", "gray", "cadetblue", "cadetblue", "violet",
"violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
caches = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickcard = function () {
   activeCard = this;

    if(activeCard == activeCards[0]) return;

   activeCard.classList.remove("hidden");
    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        console.log("1");
        return;
    }

    else {
        console.log("2");
        cards.forEach(card => card.removeEventListener("click", 
        clickcard))
        activeCards[1]= activeCard;
        setTimeout(function(){

            if(activeCards[0].className === activeCards[1].className) {
                console.log("wygrane")
                activeCards.forEach(card => card.classList.add("off"))
                gameResult++;
                cards = cards.filter(card => !card.classList.contains("off"));
                if (gameResult == gamePairs) {
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime)/1000
                    alert(`udało się! twój wynik to: ${gameTime}
                    sekund`)
                    location.reload();
                }
            }
            else {
                console.log("przegrana")
                activeCards.forEach(card => card.classList.add
                    ("hidden"))
            } 
            activeCard ="";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click",
            clickcard)) 
        }, 500)
    }
}

const init = function() {
    cards.forEach(function (card) {
        const position = Math.floor(Math.random() *
        cardsColor.length); 
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);
    })

    setTimeout(function(){
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickcard)
        })
    }, 2000)
}


init()
