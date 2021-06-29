const cardSet = document.querySelectorAll(".card");
let isFlipped = false;
let seal = false;
let card1, card2;

function flip() {
    if (seal) return;
    //To avoid clicking again on the same card
    if (this === card1) return;
    this.classList.toggle("flip");
    if (!isFlipped) {
        //1st click
        isFlipped = true;
        card1 = this;
        return;
    }
    //2nd click
    isFlipped = false;
    card2 = this;
    identical();
}
function identical() {
    //If both cards match they get disabled, otherwise they get flipped back
    card1.dataset.framework === card2.dataset.framework ? setInactive() : flipBack();
}

//Function to disable both cards in case they match
function setInactive() {
    card1.removeEventListener("click", flip);
    card2.removeEventListener("click", flip);
    reset();
}

//Function to flip both cards back in case they don't match
function flipBack() {
    seal = true;
    setTimeout(() => {
        card1.classList.remove("flip");
        card2.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    // Destructuring assignment
    [isFlipped, seal] = [false, false];
    [card1, card2] = [null, null];
}

// IIFE, this runs as soon as it's defined
(function shuffle() {
    cardSet.forEach(card => {
        let randomPlacing = Math.floor(Math.random() * 12);
        card.style.order = randomPlacing;
    });
})();

cardSet.forEach(card => card.addEventListener("click", flip));




