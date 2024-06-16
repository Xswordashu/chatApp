import express from "express";
import { register } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/token.validation.js";
const router = express.Router();


router.route("/register").post(register)
router.route("/test").get(authenticateToken, (req,res)=>{
    console.log('rrrr', req.user);
    res.send("Authorized User")
})

export default router;
