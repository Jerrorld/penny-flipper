
let headsCount = 0;
if(localStorage.getItem('headsCount') !== null) {
    headsCount = parseInt(localStorage.getItem('headsCount'))
}
let tailsCount = 0;
if(localStorage.getItem('tailsCount') !== null) {
    tailsCount = parseInt(localStorage.getItem('tailsCount'))
}
function scoreTable(){
document.getElementById('heads-counter').textContent = headsCount;
document.getElementById('tails-counter').textContent = tailsCount;
let total = headsCount + tailsCount;

let percentageHeads = Math.round(headsCount/total * 100);
let percentageTails = Math.round(tailsCount/total * 100);
document.querySelector('#heads-percentage').textContent = percentageHeads + "%"
document.querySelector('#tails-percentage').textContent = percentageTails + "%"
}

scoreTable()

localStorage.getItem('headsCount')
localStorage.getItem('tailsCount')
let pennyHeads = document.querySelector('img');
let flipButton = document.getElementById("flip-btn")
flipButton.addEventListener("click", function(){
    let isHeads = Math.random() < 0.5
    if(isHeads == true){
    document.querySelector('img').src = "./assets/images/penny-heads.jpg";
    document.querySelector('#result-header').innerHTML = "You Flipped Heads!";
    headsCount++;
    }else {
        document.querySelector('img').src = "./assets/images/penny-tails.jpg";
        document.querySelector('#result-header').innerHTML = "You Flipped Tails!";
        tailsCount++;
    }
    scoreTable()

    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);
})

document.getElementById('reset-btn').addEventListener("click", function(){
    headsCount = 0;
    tailsCount = 0;
    document.querySelector('#result-header').innerHTML = "Let's Get Rolling!";
    document.querySelector('img').src = "./assets/images/penny-heads.jpg"
    // image of penny heads
    scoreTable();
})