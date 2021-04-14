var express = require('express');
const { HttpError } = require('http-errors');
const mongoose = require('mongoose');
var router = express.Router();

const signUpSchema = new mongoose.Schema({
    UserId: Number,
    UserName: String,
    Password: String,
    IsActive: Boolean
},
    {
        versionKey: false,
        timestamps: true
    });

const SignUpDetails = mongoose.model('SignUpDetails', signUpSchema);

class SignUpController {

    static async getAllData(req, res) {
        const signUpDetails = await SignUpDetails.find();
        console.log(signUpDetails);

        res.send("Welcome to Sign Up Controller controller");
    }

    static async addSignUpDetails(req, res) {

        const userId = await SignUpDetails.find().sort("-UserId").select("UserId").count();

        console.log(userId)

        const signUpDetails = new SignUpDetails({
            UserId: userId + 1,
            UserName: req.body.UserName,
            Password: req.body.Password,
            IsActive: req.body.IsActive
        });

        const result = await signUpDetails.save();
        console.log(result);

        res.send("Schema generate successfully.");

    }

    static async updateData(req, res) {
        const result = await SignUpDetails.updateOne({ UserId: req.params.id }, {
            $set: {
                UserName: req.body.UserName,
                Password: req.body.Password,
                IsActive: req.body.IsActive
            }
        });

        res.send(result)
    }

    static async deleteUser(req, res) {
        const result = await SignUpDetails.deleteOne({ UserId: req.params.id });
        res.send(result)
    }
}

router.get('/', SignUpController.getAllData);
router.post('/', SignUpController.addSignUpDetails);
router.put('/:id', SignUpController.updateData);
router.delete('/:id', SignUpController.deleteUser);
module.exports = router;
module.exports.signUpModel = SignUpDetails;