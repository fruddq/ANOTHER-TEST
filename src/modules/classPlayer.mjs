import { shuffle, deck } from './classCard.mjs'

export class Player {
  constructor(hand) {
    this.hand = hand
  }
}
const arrayStorage1 = []
const arrayStorage2 = []
const arrayStorage3 = []
const arrayStorage4 = []
// shuffle(deck)
for (let i = 0; i < 13; i++) {
  arrayStorage1.push(deck.pop())
  arrayStorage2.push(deck.pop())
  arrayStorage3.push(deck.pop())
  arrayStorage4.push(deck.pop())
}

export const playerOne = new Player(arrayStorage1)
export const playerTwo = new Player(arrayStorage2)
export const playerThree = new Player(arrayStorage3)
export const playerFour = new Player(arrayStorage4)
