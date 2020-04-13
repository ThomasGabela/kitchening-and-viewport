const express = require("express")
const router = express.Router();
const controller = require("../controller/indexController")

router.get("/", controller.home)
router.get("/contact", controller.contact)
router.get("/faq", controller.faq)
router.get("/sucursales", controller.sucursales)
router.get("/votadas", controller.votadas)

module.exports = router;