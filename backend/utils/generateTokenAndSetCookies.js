// @ts-nocheck
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export const generateTokenAndSetCookies = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET)
 

    res.cookie("token", token, {
        httpOnly: true, //prevent attack
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return token;
}