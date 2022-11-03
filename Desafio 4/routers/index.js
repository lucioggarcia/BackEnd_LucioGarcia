const { Router } = require("express");
const productos = require("./prod");

const router = Router();

router.use("/productos", productos);

module.exports = router;