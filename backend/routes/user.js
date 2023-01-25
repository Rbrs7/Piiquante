const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
/* const auth = require("auth") */

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

/* router.get('/', auth, saucesCtrl.getAllSauces)
router.post('/', auth, saucesCtrl.createThing)
router.get('/:id', auth, saucesCtrl.getOneThing)
router.put('/:id', auth, saucesCtrl.modifyThing)
router.delete('/:id', auth, saucesCtrl.deleteThing) */


module.exports = router;
