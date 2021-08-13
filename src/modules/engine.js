/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
const { Card } = require('./classCard')
const { Player } = require('./classPlayer')

class Engine {
  /**
   * Engine for Big2
   * @param {number} numberOfPlayers //2-4 players
   * @returns {object}
   */
  constructor(numberOfPlayers) {
    // throe new error if its not 2-4
    this.numberOfPlayers = numberOfPlayers
    this.startingPlayer = 1
    this.deck = []
    this.players = []
  }

  startNewGame() {
    this.createDeck()
    this.shuffleDeck()
    this.dealCards()
  }

  createDeck() {
    Card.defaults.values.forEach((value) => {
      Card.defaults.suits.forEach((suit) => {
        this.deck.push(new Card(value, suit))
      })
    })
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
    }
  }

  dealCards() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      const playerCards = []

      for (let i2 = 0; i2 < 13; i2++) {
        playerCards.push(this.deck.pop())
      }
      this.players.push(new Player(playerCards))
    }
  }
}
module.exports = { Engine }

// If the game is completely new player one gets the first card -- DONE
// create a deck, shuffle and deal cards -- Done

// The chairs have a starting order. -- Done
// When game starts the chairs dissapears in animation.
// find starting player let him start
// First card must include 3 of diamonds
