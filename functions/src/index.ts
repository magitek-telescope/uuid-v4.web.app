import * as functions from 'firebase-functions'
import { v4 } from 'uuid'

export const uuidApi = functions.https.onRequest((request, response) => {
  response.json({
    uuid: v4()
  })
})
