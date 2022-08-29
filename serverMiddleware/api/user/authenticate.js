const api = require('../../util/api')
const u = require('../../user/userUtil')
const system = require('../../util/config').SYSTEM
const logger = system.logger

const ACCOUNT_NOT_FOUND = { email: ['accountNotFound'] }

export default {
  path: '/api/user/authenticate',
  handler (req, res) {
    logger.info(`>>>>> API: Authenticate ${req.url} ....`)
    req.on('data', (data) => {
      const loginRequest = JSON.parse(data.toString())
      if (typeof loginRequest.email === 'string' && loginRequest.email.length > 1) {
        u.findUser(loginRequest.email).then(
          (user) => {
            u.checkPassword(user, loginRequest.password, (ok) => {
              if (ok) {
                u.startSession(user).then(
                  (sessionUser) => {
                    if (u.isAdmin(sessionUser)) {
                      sessionUser.admin = true
                    }
                    api.setSessionCookie(res, sessionUser.session)
                    api.okJson(res, sessionUser)
                  },
                  (error) => {
                    logger.error(`>>>>> API: Authenticate: error starting session: ${error}`)
                    api.serverError(res, `Error: ${error}`)
                  })
              } else {
                logger.info(`>>>>> API: Authenticate: wrong password (ok was ${ok})`)
                return api.validationFailed(res, ACCOUNT_NOT_FOUND)
              }
            },
            (err) => {
              logger.info(`>>>>> API: Authenticate: wrong password: (err was ${err})`)
              return api.validationFailed(res, ACCOUNT_NOT_FOUND)
            })
          },
          (err) => {
            logger.error(`>>>>> API: Authenticate: error reading user record: ${JSON.stringify(err)}`)
            return api.validationFailed(res, ACCOUNT_NOT_FOUND)
          }
        )
      }
    })
  }
}
