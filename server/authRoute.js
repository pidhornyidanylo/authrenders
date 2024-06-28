const cors = require("cors");
const express = require("express");
const {
    loginUser,
    registerUser,
    logoutUser,
    checkAuth
} = require("./authUserControls");

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check", checkAuth);

module.exports = router;