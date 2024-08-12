const express = require("express")
const { register_user, login } = require("../controllers/user_controller")
const router = express.Router()


router.post("/register", register_user)
router.post("/login", login)
module.exports = router
