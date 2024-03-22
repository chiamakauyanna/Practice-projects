
let card = [];
let player = {
  name: 'Chiamaka',
  chips: 200
};
let sum = 0
let isAlive = false;
let hasBlackJack = false;

const messageEl = document.querySelector('.message-el');
const sumEl = document.querySelector('.sum-el');
const cardsEl = document.querySelector('.cards-el');
const playerEl = document.querySelector('.player-el');

playerEl.textContent = player.name + ' : '+ '$' + player.chips


console.log(card)

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1 ;
  if(randomNumber === 1){
      return 11;
    }
    else if(randomNumber > 10){
      return 10;
    }
    
    return randomNumber
  }

function startGame() {
  isAlive = true;
  let firstHand = getRandomCard() 
  let secondHand = getRandomCard() 
 card = [firstHand, secondHand]
 sum = firstHand + secondHand;

  renderGame();
}

//ctrl + d several times to select related words at once and change or delete
function renderGame() {
 cardsEl.textContent = "cards: "
  
 // for(let i = 0; i < card.length; i++) {
    //cardsEl.textContent +=  card[i] + " "
  //}
card.forEach((index) => {
  cardsEl.textContent += (index) + " " 
});

  sumEl.textContent ="Sum: " + sum;
  if(sum <= 20) {
    messageEl.textContent = 'Do you want to draw a new card?' ;
    
  }
  else if(sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
    hasBlackJack = true;
  }
  else{
    messageEl.textContent = "You're out of the game!" ;
    isAlive = false;
  }
}

function newCard() {
 let thirdcard = getRandomCard();
  sum += thirdcard;
  card.push(thirdcard);
  if(isAlive === true && hasBlackJack === false){
    renderGame();
  }

   }
