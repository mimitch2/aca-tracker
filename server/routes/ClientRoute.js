const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/ClientController");


router.get("/clients", list)
router.get("/clients/:id", show);
router.post("/clients", create);
router.put("/clients/:id", update);
router.delete("/clients/:id", remove);

module.exports = router;
