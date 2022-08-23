const c = require('../../../shared/index')
const api = require('../../util/api')
const u = require('../../user/userUtil')
const s = require('../../source/sourceUtil')

function handleSourceError (res, e, sourceName) {
  if (e instanceof s.SourceNotFoundError) {
    return api.notFound(res, sourceName)
  }
  return api.serverError(res, e)
}

async function handleAdd (res, source) {
  if (await s.sourceExists(source.name)) {
    return api.handleValidationError(res, { name: 'alreadyExists' })
  }
  try {
    return api.okJson(res, await s.createSource(source))
  } catch (e) {
    return api.serverError(res, `Error creating source: ${JSON.stringify(e)}`)
  }
}

async function handleDelete (res, name) {
  return await s.sourceExists(name).then(
    (sourceName) => {
      if (sourceName) {
        s.deleteSource(sourceName).then(
          () => api.okJson(res, { deleted: true }),
          (err) => {
            const message = `handleDelete: error calling deleteSource: ${err}`
            console.error(message)
            return api.serverError(res, message)
          })
      } else {
        return api.notFound(res, name)
      }
    },
    err => handleSourceError(res, err, name)
  )
}

async function handleQuery (res, query) {
  return api.okJson(res, await s.listSources(query))
}

export default {
  path: '/api/admin/sources',
  async handler (req, res) {
    const user = await u.requireAdmin(req, res)
    if (!user) {
      return api.forbidden(res)
    }
    const sourceName = req.url.startsWith('/') ? req.url.substring(1) : req.url
    let handler
    try {
      switch (req.method) {
        case 'GET': return await s.findSource(sourceName)
        case 'DELETE': return await handleDelete(res, sourceName)
        case 'PUT':
          handler = handleAdd
          break
        case 'POST':
          handler = handleQuery
          break
        default:
          return api.serverError(res, c.HTTP_INVALID_REQUEST_MESSAGE)
      }
    } catch (e) {
      return handleSourceError(res, e, sourceName)
    }
    req.on('data', async data => await handler(res, JSON.parse(data.toString())))
  }
}
