export class Card {
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }
}

export function shuffle(shuffleThisArray) {
  for (let i = shuffleThisArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffleThisArray[i], shuffleThisArray[j]] = [
      shuffleThisArray[j],
      shuffleThisArray[i],
    ]
  }
}
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']

export const deck = []
values.forEach((value) => {
  suits.forEach((suit) => {
    deck.push(new Card(value, suit))
  })
})
