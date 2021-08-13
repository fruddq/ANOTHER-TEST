/* eslint-disable import/prefer-default-export */
export const checkPair = (valuesArray) => {
  if (valuesArray.length === 2 && valuesArray[0] === valuesArray[1]) {
    return true
  }
  return false
}

export const checktripple = (valuesArray) => {
  if (
    valuesArray.length === 3 &&
    valuesArray[0] === valuesArray[1] &&
    valuesArray[1] === valuesArray[2]
  ) {
    return true
  }
  return false
}

export const getStraightValue = (valuesArray, suitsArray) => {
  let straight = false
  const highestValue = Math.max(...valuesArray)
  let suitOfHighestCard = suitsArray[valuesArray.indexOf(highestValue)]

  if (
    valuesArray[0] === 1 &&
    valuesArray[1] === 10 &&
    valuesArray[2] === 11 &&
    valuesArray[3] === 12 &&
    valuesArray[4] === 13
  ) {
    valuesArray[0] = 14
    suitOfHighestCard = suitsArray[0]
  }

  valuesArray.sort((a, b) => a - b)

  for (let i = 0; i <= 3; i++) {
    if (valuesArray[i] + 1 === valuesArray[i + 1]) {
      straight = true
    } else {
      straight = false
      break
    }
  }
  if (straight === true) {
    return valuesArray[4] * 5 + suitOfHighestCard
  }
  return 0
}

export const getFlushValue = (valuesArray, suitsArray) => {
  let flush = false

  for (let i = 0; i <= 3; i++) {
    if (suitsArray[i] === suitsArray[i + 1]) {
      flush = true
    } else {
      flush = false
      break
    }
  }

  if (flush === true) {
    if (
      valuesArray.includes(1) === false &&
      valuesArray.includes(2) === false
    ) {
      return suitsArray[0] * 100 + Math.max(...valuesArray)
    }
    if (valuesArray.includes(1) === true && valuesArray.includes(2) === false) {
      return suitsArray[0] * 100 + 14
    }
    if (flush === true && valuesArray.includes(2) === true) {
      return suitsArray[0] * 100 + 15
    }
  }
  return 0
}

export const getFullHouseValue = (valuesArray) => {
  if (
    valuesArray[0] === valuesArray[1] &&
    valuesArray[1] === valuesArray[2] &&
    valuesArray[3] === valuesArray[4]
  ) {
    if (valuesArray[0] === 1) {
      return 614
    }
    if (valuesArray[0] === 2) {
      return 615
    }
    return valuesArray[0] + 600
  }
  if (
    valuesArray[0] === valuesArray[1] &&
    valuesArray[2] === valuesArray[3] &&
    valuesArray[3] === valuesArray[4]
  ) {
    if (valuesArray[4] === 1) {
      return 614
    }
    if (valuesArray[4] === 2) {
      return 615
    }
    return valuesArray[4] + 600
  }
  return 0
}

export const getFourOfAKindValue = (valuesArray) => {
  if (
    valuesArray[0] === valuesArray[1] &&
    valuesArray[1] === valuesArray[2] &&
    valuesArray[2] === valuesArray[3]
  ) {
    if (valuesArray[0] === 1) {
      return 714
    }
    if (valuesArray[0] === 2) {
      return 715
    }
    return valuesArray[0] + 700
  }

  if (
    valuesArray[1] === valuesArray[2] &&
    valuesArray[2] === valuesArray[3] &&
    valuesArray[3] === valuesArray[4]
  ) {
    if (valuesArray[4] === 1) {
      return 714
    }
    if (valuesArray[4] === 2) {
      return 715
    }
    return valuesArray[4] + 700
  }

  return 0
}
