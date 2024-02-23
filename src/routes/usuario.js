const {Router} = require('express')
const router = Router()

const {getProd,createProd,getProdid,updateProd,deleteProd} = require('../controller/usuario.controller')
router.route('/')

    .get(getProd)
    .post(createProd)

router.route('/:id')
    .get(getProdid)
    .delete(deleteProd)
    .put(updateProd)

module.exports = router;