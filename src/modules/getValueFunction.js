/* eslint-disable import/prefer-default-export */
import {
  checkPair,
  checktripple,
  getStraightValue,
  getFlushValue,
  getFullHouseValue,
  getFourOfAKindValue,
} from './pokerRulesFunctions.mjs'

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
  // suitsArray.forEach((element, i, array) => {
  //   if (element === 'Spades') {
  //     array[i] = 5
  //   } else if (element === 'Hearts') {
  //     array[i] = 3
  //   } else if (element === 'Clubs') {
  //     array[i] = 2
  //   } else if (element === 'Diamonds') {
  //     array[i] = 1
  //   }
  // })
  // valuesArray.forEach((element, i, array) => {
  //   if (element === 'Jack') {
  //     array[i] = 11
  //   } else if (element === 'Queen') {
  //     array[i] = 12
  //   }
  //   if (element === 'King') {
  //     array[i] = 13
  //   }
  // })

  valuesArray.sort((a, b) => a - b)
  const totalValueOfSuits = suitsArray.reduce(
    (accumulator, element) => accumulator + element
  )

  if (
    valuesArray.length === 1 ||
    checkPair(valuesArray) === true ||
    checktripple(valuesArray) === true
  ) {
    if (valuesArray[0] !== 1 && valuesArray[0] !== 2) {
      return valuesArray[0] * 10 + totalValueOfSuits
    }
    if (valuesArray[0] === 1) {
      return totalValueOfSuits + 200
    }
    if (valuesArray[0] === 2) {
      return totalValueOfSuits + 300
    }
    return 0
  }

  let straightFlush = false
  if (
    getStraightValue(valuesArray, suitsArray) > 0 &&
    getFlushValue(valuesArray, suitsArray) > 0
  ) {
    straightFlush = true
  }

  if (valuesArray.length === 5 && straightFlush === false) {
    return (
      getStraightValue(valuesArray, suitsArray) +
      getFlushValue(valuesArray, suitsArray) +
      getFullHouseValue(valuesArray) +
      getFourOfAKindValue(valuesArray)
    )
  }
  if (valuesArray.length === 5 && straightFlush === true) {
    return (
      getFlushValue(valuesArray, suitsArray) +
      getStraightValue(valuesArray, suitsArray) +
      1000
    )
  }
  return 0
}

/// /////////// Card wieght//////////////
//                          Min  high
// singlePairTripplets	    4	 140(310)  Highest card*10 + sum(suitvalues) (+200 if Ace, + 300 if Two)

// straight	                26   75  Highest card(accounted for ace) * 5 + suitof highest card
// flush	                108	 515 Suit of highest card*100 + highest card ( special rules for ace and two)
// fullHouse	            603	 615 triplearray[0]+600( will take the value that is triple)
// fourOfAKind	            703	 715 triplearray[0]+700
// straightFlush	        805  1214 Suit of highest card*100 + highest card + 700
/// /// Since length of cards must be true we only have to check difference in 5 card plays and singlePairTriplets seperatly////
