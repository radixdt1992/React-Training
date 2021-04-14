var express = require('express');
const { HttpError } = require('http-errors');
const mongoose = require('mongoose');
var router = express.Router();

const registrationSchema = new mongoose.Schema({
    UserDetailId: Number,
    FirstName: String,
    MiddleName: String,
    LastName: String,
    Gender: String,
    Age: Number,
    EmailId: String,
    MobileNumber: String,
    IsActive: Boolean,
    UserId: Number
},
    {
        versionKey: false,
        timestamps: true
    });

const RegistrationDetails = mongoose.model('RegistrationDetails', registrationSchema);


class RegistrationController {
    static async getData(req, res) {

        const registrationDetails = await RegistrationDetails.find();
        console.log(registrationDetails);

        res.send(registrationDetails)
    }

    static async addRegistrationDetails(req, res) {

        const registrationDetails = new RegistrationDetails({
            UserDetailId: req.body.UserDetailId,
            FirstName: req.body.FirstName,
            MiddleName: req.body.MiddleName,
            LastName: req.body.LastName,
            Gender: req.body.Gender,
            Age: req.body.Age,
            EmailId: req.body.EmailId,
            MobileNumber: req.body.MobileNumber,
            IsActive: req.body.IsActive,
            UserId: req.body.UserId
        });

        const result = await registrationDetails.save();
        console.log(result);

        res.send("Data added successfully!!!")
    }

    static async updateRegistrationDetails(req, res) {

        const result = await RegistrationDetails.updateOne({ UserDetailId: req.params.id }, {
            $set: {
                FirstName: req.body.FirstName,
                MiddleName: req.body.MiddleName,
                LastName: req.body.LastName,
                Gender: req.body.Gender,
                Age: req.body.Age,
                EmailId: req.body.EmailId,
                MobileNumber: req.body.MobileNumber,
                IsActive: req.body.IsActive
            }
        });

        res.send(result)
    }

    static async deleteRegistrationDetails(req, res){
        const result = await RegistrationDetails.deleteOne({ UserDetailId: req.params.id });
        res.send(result)
    } 
}

router.get('/', RegistrationController.getData);
router.post('/', RegistrationController.addRegistrationDetails);
router.put('/:id', RegistrationController.updateRegistrationDetails);
router.delete('/:id', RegistrationController.deleteRegistrationDetails);
module.exports = router;