const express = require("express")
const { postRating, getprodreviews } = require("../controllers/reviewcontrollers")
const router = express.Router()
/**
 * @route POST /review/add/:idprod
 * @description add new review
 * @access public
 */


router.post("/add/:idprod",postRating)
 /**
 * @route get /review/:idprod
 * @description get product reviews
 * @access public
 */
router.get("/:idprod",getprodreviews)
module.exports = router