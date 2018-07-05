
/** ********************** Import node modules ************************ */
import { Router } from 'express'

/** ********************** Import local modules ************************ */
import logincontroller from '../datamodel/logincontroller'
import defaultcontroller from '../datamodel/defaultcontroller'
import updateblog from '../datamodel/updateblogcontent'
const apiRoutes = Router();

/** **************************** User APIs ********************************* */
/** Login API */
apiRoutes.get('/', defaultcontroller.defaultres)
apiRoutes.post('/login', logincontroller.login)
apiRoutes.post('/updateblog', updateblog.update)

export default apiRoutes;
