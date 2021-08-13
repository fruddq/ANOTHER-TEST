/* eslint-disable jest/prefer-expect-assertions */
const { Engine } = require('../engine')

describe('engine', () => {
  describe('createDeck', () => {
    it('creates deck correctly', () => {
      const instance = new Engine(4)
      instance.createDeck()
      const counterSuits = {
        1: new Set(),
        2: new Set(),
        3: new Set(),
        5: new Set(),
      }

      instance.deck.forEach(({ value, suit }) => {
        counterSuits[suit].add(value)
      })
      const counterSuitsValues = Object.values(counterSuits)
      for (let i = 1; i < 14; i++) {
        counterSuitsValues.forEach((suitSet) => {
          expect(suitSet.has(i)).toBeTruthy()
        })
      }
    })
  })

  describe('shuffleDeck', () => {
    it('shuffles correctly', () => {
      const instance = new Engine(4)
      instance.createDeck()
      expect(instance.deck[0]).toEqual({
        value: 1,
        suit: 1,
      })

      while (true) {
        try {
          instance.shuffleDeck()
          expect(instance.deck[0]).not.toEqual({
            value: 1,
            suit: 1,
          })

          break
        } catch (error) {}
      }
    })
  })
  // for loop that shit
  describe.only('dealCards', () => {
    it('deals cards correctly limited ammount of players that the engine can take', () => {
      const instance = new Engine(4)
      instance.createDeck()
      instance.dealCards()
      expect(instance.players).toHaveLength(4)
      expect(instance.players[0].hand).toHaveLength(13)
      expect(instance.players[1].hand).toHaveLength(13)
      expect(instance.players[2].hand).toHaveLength(13)
      expect(instance.players[3].hand).toHaveLength(13)
    })
  })
})

// skriva testa hela gameEngine, sen hela gamesengine, let them fail
