// eslint-disable-next-line import/prefer-default-export
export const getTotalValue = (arrayOfCards) => {
  // Create an array of only values and only suits
  const valuesArray = []
  const suitsArray = []
  arrayOfCards.forEach((element) => {
    valuesArray.push(element.value)
  })
  arrayOfCards.forEach((element) => {
    suitsArray.push(element.suit)
  })
  /// /////////////////////////////////////////////////////
  // Converts strings to number for easier comparison
  suitsArray.forEach((element, i, thisArray) => {
    if (element === 'Spades') {
      thisArray[i] = 5
    } else if (element === 'Hearts') {
      thisArray[i] = 3
    } else if (element === 'Clubs') {
      thisArray[i] = 2
    } else if (element === 'Diamonds') {
      thisArray[i] = 1
    }
  })
  valuesArray.forEach((element, i, thisArray) => {
    if (element === 'Jack') {
      thisArray[i] = 11
    } else if (element === 'Queen') {
      thisArray[i] = 12
    }
    if (element === 'King') {
      thisArray[i] = 13
    }
  })
  /// ///////////////////////////////
  const highestValue = Math.max(...valuesArray)
  const suitOfHighestCard = suitsArray[valuesArray.indexOf(highestValue)]
  valuesArray.sort((a, b) => a - b)

  /// /////////////////////////////////////////////////////

  if (
    valuesArray.length === 1 ||
    checkPair(valuesArray) === true ||
    checkTripple(valuesArray) === true
  ) {
    if (valuesArray[0] !== 1 && valuesArray[0] !== 2) {
      return valuesArray[0] + suitOfHighestCard
    }
    if (valuesArray[0] === 1) {
      return suitOfHighestCard + 20
    }
    if (valuesArray[0] === 2) {
      return suitOfHighestCard + 40
    }
    return 0
  }
  return 0
}

const checkPair = (valuesArray) => {
  if (valuesArray.length === 2 && valuesArray[0] === valuesArray[1]) {
    return true
  }
  return false
}

const checkTripple = (valuesArray) => {
  if (
    valuesArray.length === 3 &&
    valuesArray[0] === valuesArray[1] &&
    valuesArray[1] === valuesArray[2]
  ) {
    return true
  }
  return false
}
const bajs = [10, 11, 12, 13, 14]

/// must work for aces
const checkStraight = (valuesArray) => {
  let temp = false
  if (valuesArray.length === 5) {
    for (let i = 0; i <= 3; i++) {
      if (valuesArray[i] + 1 === valuesArray[i + 1]) {
        temp = true
      } else {
        temp = false
        break
      }
    }
    return temp
  }
  return temp
}

console.log(checkStraight(bajs))
