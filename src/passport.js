import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import passport from "passport";
import JWTStrategy from "passport-jwt";

const jwtOptions = {
    jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret: process.env.JWT_SECRET
}