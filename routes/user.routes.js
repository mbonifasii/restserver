"use strict";

// - Import applications and tools
const { Router } = require("express");
const router = Router();

// - Import user controllers
const { getUser } = require("./../controllers/user.controller")

router.get("/", getUser)

module.exports = router;