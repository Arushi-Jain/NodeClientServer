import * as admin from 'firebase-admin'
import config from  '../../config/cyrrup-web-challenge-firebase-adminsdk-vokl4-560c797e9e.json'

admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: 'https://console.firebase.google.com/project/cyrrup-web-challenge/database/firestore/data~2F'
})

function login(req, res) {
  const userDetails = req.body;
  console.log('Login request: ', userDetails)
  var uid = 'welcometocyrrrupsolutions'
  if (userDetails !== undefined && userDetails.email !== undefined && userDetails.password !== undefined) {
      // now we can pass the jwt so we create one
      admin.auth().createCustomToken(uid)
        .then(function(customToken) {
            // Send token back to client
            console.log (customToken)
            res.status(200).json({
                success: true,
                data: customToken,
            });
        })
        .catch(function(error) {
            console.log("Error creating custom token:", error)
        })
      
  } else {
      logger.error('Login failed: Empty fields!')
      res.status(400).json({
          success: false,
          error: 'Empty fields!'
      })
  }
}

export default {
  login
}