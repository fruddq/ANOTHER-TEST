/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { isNumber, isString } = require('lodash')
const { GamesEngine } = require('./gamesEngine')

const serverActions = {
  returnError(ctx, status, message) {
    ctx.type = 'json'
    ctx.status = status
    ctx.body = {
      status: 'error',
      message,
    }
    ctx.app.emit('error', new Error(message), ctx)
  },
}

const startServer = () => {
  const app = new Koa()
  const gamesEngine = new GamesEngine()
  app.use(bodyParser())

  app.use(async (ctx) => {
    if (
      ctx.request.method === 'POST' &&
      ctx.request.url === '/game/chooseSeat' &&
      isNumber(ctx.request.body.seatNumberRequest) &&
      ctx.request.body.seatNumberRequest > 0 &&
      ctx.request.body.seatNumberRequest < 5
    ) {
      gamesEngine.chooseSeat(
        ctx.request.body.seatNumberRequest,
        ctx.request.body.gameNumber
      )

      ctx.body = {
        playerID: gamesEngine.createPlayerID(),
      }
    } else if (
      ctx.request.method === 'POST' &&
      ctx.request.url === '/game/chooseTable' &&
      isString(ctx.request.body.gameID)
    ) {
      if (gamesEngine.joinExistingTable(ctx.request.body.gameID, 3)) {
        ctx.body = {
          status: 'Success',
          message: 'Table Joined',
        }
      } else {
        serverActions.returnError(ctx, 404, "gameID doesn't exist")
      }
    } else {
      serverActions.returnError(ctx, 400, 'Bad request')
    }
  })

  app.listen(3000)
}

module.exports = { startServer }
// give a visitor an id, save it to variable inside a class called gamesEngine
// Cannot be same
// request through an id
// every player must have the option to create a table
