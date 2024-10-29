import express from "express"
import { forgetPassword, login, logout, resetPassword, signup, verifyAuth, verifyEmail } from "../controllers/authController.js"

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router()

router.get("/verify-auth", verifyToken, verifyAuth);


router.post("/signup", signup )
router.post("/login", login)
router.post("/logout",logout )



router.post("/forget-password",forgetPassword)
router.post("/verify-email",verifyEmail)
router.post("/reset-password/:token",resetPassword)


export default router