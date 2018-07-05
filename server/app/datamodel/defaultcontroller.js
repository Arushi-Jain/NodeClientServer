import service from '../service/service'

function defaultres (req, res) {
    res.status(200).send("welcome to my auth server");
  }

export default {
    defaultres
}