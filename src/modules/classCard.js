class Card {
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }
}

Card.defaults = {
  // 1 = ace ; 11 = jack ; 12 = queen 13 = King
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  // 1 = Diamonds ; 2 = Clubs, 3 = Hearts; 5 = Spades
  suits: [1, 2, 3, 5],
}

module.exports = { Card }
