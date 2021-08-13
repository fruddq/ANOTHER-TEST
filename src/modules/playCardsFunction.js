/* eslint-disable import/prefer-default-export */
import { getTotalValue } from './getValueFunction.js'

export const playCards = (input1, input2) => {
  if (
    input1.length === input2.length &&
    getTotalValue(input1) > getTotalValue(input2)
  ) {
    console.log(input1)
    console.log(input2)
    console.log(`${getTotalValue(input1)} value input1`)
    console.log(`${getTotalValue(input2)} value input2`)
    console.log('success')
  } else if (input2 === [] && getTotalValue(input1) !== 0) {
    console.log('play cards')
  } else {
    console.log('ERROR')
  }
}

// else if (
//   input2 === [0] &&
//   isStartingPlayer(input1) === true &&
//   getTotalValue(input1) !== 0
// ) {
//   console.log('play cards')
// }
