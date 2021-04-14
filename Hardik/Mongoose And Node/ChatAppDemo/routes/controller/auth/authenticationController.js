var express = require('express');
const { HttpError } = require('http-errors');
let jwt = require('jsonwebtoken');
var router = express.Router();
var { signUpModel } = require('../signUp/signupcontroller');

class authenticationController {

    static async getAllData(req, res) {
        res.send("Welcome to authentication controller");
    }

    static async verifyUser(req, res) {

        const data = await signUpModel.findOne({ $and: [{ UserName: { $in: req.body.username }, Password: { $in: req.body.password } }] });

        let token = jwt.sign(req.body, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '5m'
        });

        console.log(data)

        // if (req.body.username == "admin" && req.body.password == "admin") {
        //     res.status(200).json({ "Message": "Successfully logged in" });
        // }
        // else {
        //     res.status(401).json({ "Message": "invalid user" });
        // }

        if (data && (data.IsActive == true)) {
            res.status(200).json({ "Message": "Successfully logged in" , "token": token});
        }
        else {
            res.status(401).json({ "Message": "invalid user" });
        }
    }

}

router.get('/', authenticationController.getAllData);
router.post('/', authenticationController.verifyUser);
module.exports = router;