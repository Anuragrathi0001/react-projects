import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    // User Registration
    static userRegistration = async (req, res) => {
        const { username, email, password } = req.body;

        try {
            if (username && email && password) {
                // Check if the user already exists
                const isUser = await authModel.findOne({ email: email });
                if (!isUser) {
                    // Hash the password
                    const salt = await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password, salt);

                    // Save the new user
                    const newUser = new authModel({
                        username,
                        email,
                        password: hashedPassword,
                    });

                    const savedUser = await newUser.save();
                    if (savedUser) {
                        return res.status(200).json({ message: "User registration successfully completed" });
                    }
                } else {
                    return res.status(400).json({ message: "Email already exists" });
                }
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    // User Login
    static userLogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const isEmail = await authModel.findOne({ email: email });
                if (isEmail) {
                if(isEmail.email === email &&
                        (await bcryptjs.compare(password, isEmail.password))){
                        //generate token jwt
                    const token = jwt.sign({ userID: isEmail._id }, "please subscribe", {
                        expiresIn: "2d",
                    });
                    return res.status(200).json({
                        message: "Login sucessful",
                        token,
                        name:isEmail.username, 
                    })
                    }else {
                    return res.status(400).json({ message: "wrong credentials" });
                        }
                }
                else { return res.status(400).json({ message: "Email ID is not registered" }); }
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
            
        } catch (error) {
            return res.status(400).json({ message: error.message });
            
        }
    };
}

export default AuthController;
