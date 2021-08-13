/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const { v4: uuidv4 } = require('uuid')
const { Engine } = require('./engine')

class GamesEngine {
  constructor() {
    /**
     * Array<{
     *   engine: Engine,
     *   playerIDs: Array<string>,
     *   gameID: string,
     *   seatByID: Array<string> // with min 1-4 players in length
     * }>
     */
    this.games = [{ gameID: '1' }, { gameID: '22' }]
    /**
     * Array<{
     *   ID: string,
     *   gameID?: string, // player can only be active in one game
     * }>
     */
    this.playerRegistry = [
      { ID: 'InGamePlayer', gameID: '22' },
      { ID: 'OutGamePlayer', gameID: undefined },
    ]
  }

  createPlayerID() {
    const ID = uuidv4()
    this.playerRegistry.push({
      ID,
      gameID: undefined,
    })
    return ID
  }

  /**
   * Client sends gameID with an optional playerID because he might have playerID from previsous joined table return error message if already joined
   * Push playerID into this.games[gameIDindex].playerIDs if the player doesn't exists
   * LOOK IN PLAYER REGISTERY
   *
   * @param {string} gameID - ID for game
   * @param {string} [playerID] - ID for player
   * @returns {boolean} - for table status
   */
  joinExistingTable(gameID, playerID) {
    // if playerID exists - Look through the playerregistry, if player is found check if player is in a game
    // if player is in game: Bad request
    // if player is found but NOT in game, assign GAME ID to player
    // if player is not found createplayer
    // if game id is not found Bad request
    // return correct error message to server

    // const playerIDExists = this.playerRegistry.some(({ ID }) => {
    //   if (ID === playerID) {
    //     return true
    //   }
    //   return false
    // })

    // if (playerIDExists === true) {
    //   const playerAlreadyInGame = this.playerRegistry.some(
    //     ({ gameID: findingGameID }, findingGameIDindex) => {
    //       if (gameID === findingGameID) {
    //         const gameIDindex = findingGameIDindex
    //         return true
    //       }
    //       return false
    //     }
    //   )
    // } else if (playerIDExists === false) {
    //   const newplayerID = this.createPlayerID()
    // }

    // if (playerAlreadyInGame) {
    //   console.log('Bad request') // Make real request
    // }

    // if (playerAlreadyInGame === false) {
    //   this.playerRegistry[gameIDindex].gameID = gameID
    //   // PUSH GAMEID INTO PLAYER INFO
    // }

    const gameFound = this.games.some(({ gameID: findingGameID }) => {
      if (gameID === findingGameID) {
        return true
      }
      return false
    })
    return gameFound
    // else createplayerID()
    //  const playerID = this.createPlayerID()
  }
  // first game must exist

  // chooseSeat( gameID,playerID) {
  //   console.log(playerID, gameID)
  // }

  // @TODO Class Engine should recieve a dynamic player count
  createTable() {
    const engine = new Engine(4)
    const gameID = uuidv4()
    this.games.push({
      engine,
      playerIDs: [],
      gameID,
      seats: {
        seatOne: undefined,
        seatTwo: undefined,
        SeatThree: undefined,
        SeatFour: undefined, // fill in with player IDs
      },
    })
    engine.startNewGame()
    return gameID
    // this.games.playerIDs.push(this.createPlayerID)
  }
}
module.exports = { GamesEngine }

// unlimited ammount of games
// const engine = new Engine(4)
// engine.startNewGame()
// startServer()
