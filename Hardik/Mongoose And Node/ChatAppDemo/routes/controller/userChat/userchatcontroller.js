var express = require('express');
const { HttpError, URITooLong } = require('http-errors');
const mongoose = require('mongoose');
var router = express.Router();

const userChatSchema = new mongoose.Schema({
    UserChatId: Number,
    SenderId: Number,
    ReceiverId: Number,
    Message: String,
    IsActive: Boolean
},
    {
        versionKey: false,
        timestamps: true
    });

const UserChats = mongoose.model('UserChat', userChatSchema);

class UserChatController {

    static async getAllData(req, res) {

        const userChats = await UserChats.find();
        console.log(userChats);

        res.send(userChats)
    }

    static async addChatData(req, res) {

        const userChatId = await UserChats.find().sort("-UserChatId").select("UserChatId").count();

        const userChats = new UserChats({
            UserChatId: userChatId + 1,
            SenderId: req.body.SenderId,
            ReceiverId: req.body.ReceiverId,
            Message: req.body.Message,
            IsActive: req.body.IsActive
        });

        const result = await userChats.save();
        console.log(result);

        res.send("Schema generate successfully.");
    }

    static async deleteChat(req, res) {
        
        const result = await UserChats.updateOne({ UserChatId: req.params.id }, {
            $set: {
                IsActive: false
            }
        });

        res.send(result)
    }
}

router.get('/', UserChatController.getAllData);
router.post('/', UserChatController.addChatData);
router.delete('/:id', UserChatController.deleteChat)
module.exports = router;