import User from '../model/userModel.js';
import {oAuth2Client} from '../utils/googleConfig.js'
import jwt from 'jsonwebtoken'
import axios from 'axios'


const test = (req, res) => {
    res.send('Hello from Backend1');
}

const login = async(req, res) => {
    try {
        const {code} = req.query
        const googleRes = await oAuth2Client.getToken(code)
        oAuth2Client.setCredentials(googleRes.tokens)
        console.log("first",googleRes)
        const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
        const {email, name, picture} = userInfo.data

        let user = await User.findOne({email})

        if(!user){
            user = await User.create({name, email, image: picture})
        }

        const {_id} = user
        const token = jwt.sign({_id,email} ,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})

        return res.status(200).json({
            message:"Login succesfully",
            success:true,
            token,
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed while login",
            error: error.message
        });
        
    }
}

export {
    test,
    login
}