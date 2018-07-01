import service from '../service/service'

function verifytoken (idToken) {
    admin.auth().verifyIdToken(idToken)
    .then(function(decodedToken) {
        var uid = decodedToken.uid;
        // ...
        return true
    }).catch(function(error) {
        // Handle error
        return false
    })
}
export default {
    verifytoken
}