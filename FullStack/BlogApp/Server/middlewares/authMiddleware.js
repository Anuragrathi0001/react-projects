import jwt from "jasonwebtoken";
import authModel from "../models/authModel";

const checkIsUserAuthenticated = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if(authorization&&authorization.statsWith("bearer"))
}