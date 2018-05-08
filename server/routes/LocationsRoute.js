const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/LocationsController");


router.get("/locations/", list)
router.get("/locations/:id", show);
router.post("/locations/", create);
router.put("/locations/:id", update);
router.delete("/locations/:id", remove);

module.exports = router;