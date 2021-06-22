import {
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
} from './modules/classPlayer.mjs'
import { getTotalValue } from './modules/getValueFunction.mjs'

const testCards = []
testCards.push(playerOne.hand[12])
testCards.push(playerOne.hand[12])
testCards.push(playerOne.hand[10])
// testCards.push(playerOne.hand[11])
// testCards.push(playerTwo.hand[4])

const bajs = getTotalValue(testCards)
console.log(testCards)
console.log(bajs)

// function getTotalValue(cards){
//   let valuesArray = []
//   let suitArray = []
//   let highestValue = 0
//   let highestValueStraight = 0
//   let indexHighestCard = 0
//   let suitOfHighestCard = 0
//   let pairArray = []
//   let trippleArray = []
//   let fullHouse = false
//   let fourOfaKind = false
//   let straight = false
//   let flush = false

//   for(i=0; i<=cards.length-1; i++){
//       valuesArray.push(cards[i].value)
//   }

//   for(i=0; i<=cards.length-1; i++){
//       suitArray.push(cards[i].suit)
//   }

//   highestValue = Math.max(...valuesArray)
//   indexHighestCard = valuesArray.indexOf(highestValue)
//   suitOfHighestCard = cards[indexHighestCard].suit
//   valuesArray.sort((a, b) => a - b)

//   //if its a straight with ace high straight will still become true
//   let tempStraightCalc = [...valuesArray]
//   if(valuesArray[0] === 1 && valuesArray[1] === 10 && valuesArray[2] === 11 && valuesArray[3] === 12 && valuesArray[4] === 13){
//       tempStraightCalc[0] = 14
//   }
//   tempStraightCalc.sort((a, b) => a - b)
//   highestValueStraight = Math.max(...tempStraightCalc)
//   //Value of cards will be 4 to 45 fonr singles, double, and tripplets, since they only need to be weighted for same number of cards in function playCards
//   if (cards.length === 1 ||
//       cards.length === 2 && cards[0].value === cards[1].value ||
//        cards.length === 3 && cards[0].value === cards[1].value === cards[2].value){

//           if(cards[0].value !== 1 && cards[0].value !==2 ){
//              return cards[0].value + suitOfHighestCard
//           }
//           else if(cards[0].value === 1){
//               return suitOfHighestCard + 20
//           }
//           else if(cards[0].value === 2){
//               return suitOfHighestCard + 40
//           }
//           else{
//               return 0
//           }
//    }
//    else if(cards.length === 4){
//       console.log(cards)
//    }

//    else if(cards.length === 5){
//       //first check of its a straight
//       for(i=0; i<=3; i++){
//           if(tempStraightCalc[i]+1 === tempStraightCalc[i+1]){
//               straight = true
//           }
//           else {
//               straight = false
//               break
//           }
//       }
//       //check for flush
//       for(i=0; i<=3; i++){
//           if(suitArray[i] === suitArray[i+1]){
//               flush = true
//           }
//           else {
//               flush = false
//               break
//           }
//       }
//       //check for fullhouse and four of a kind
//       for(i=0; i<=cards.length-2; i++){
//           if(valuesArray[i] === valuesArray[i+1]){
//           pairArray.push(valuesArray[i])
//           }
//           if(valuesArray[i] === valuesArray[i+1] && valuesArray[i+1]=== valuesArray[i+2]){
//               trippleArray.push(valuesArray[i])
//               trippleArray.sort((a, b) => a - b)
//           }
//       }

//       pairArray.sort((a, b) => a - b)
//       trippleArray.sort((a, b) => a - b)

//       if(pairArray.length === 3 && trippleArray.length === 1){
//           fullHouse = true
//       }
//       if(trippleArray.length === 2){
//           fourOfaKind = true
//       }

//       if(straight === true && flush === false){
//           return highestValueStraight*5 + suitOfHighestCard
//       }
//       else if(flush === true && straight === false){
//           return suitOfHighestCard*100 + highestValue
//       }
//       else if(fullHouse === true && trippleArray[0] >= 3){
//           return trippleArray[0] + 600
//       }
//       else if(fullHouse === true && trippleArray[0] === 1){
//           return 614 //highest without ace or 2 will be king = 13 + 600 = 613
//       }
//       else if(fullHouse === true && trippleArray[0] === 2){
//           return 615
//       }
//       else if(fourOfaKind === true && trippleArray[0] >= 3){
//           return trippleArray[0] + 700
//       }
//       else if(fourOfaKind === true && trippleArray[0] === 1){
//           return 714
//       }
//       else if(fourOfaKind === true && trippleArray[0] === 2){
//           return 715
//       }
//       else if(straight === true && flush === true){
//           return suitOfHighestCard*100 + highestValueStraight + 700
//       }
//       else{
//           return 0
//       }
//    }
//    else return 0
// }
