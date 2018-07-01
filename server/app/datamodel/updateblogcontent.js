import service from '../service/service'

function update (req, res) {
  // verify the token
  var verified = service.verifytoken(req.body.token)
  // write in databse
  if (verified) {
      // update the data to the databse
    // admin.auth().collection('users').doc('Frank').update({
    //     age: 13,
    //     'favorites.color': 'Red'
    //   });

  } else {
    res.status(400).json({
        success: false,
        error: 'Empty fields!'
    })
  }
}

export default {
    update
}