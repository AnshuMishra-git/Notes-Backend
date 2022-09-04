const response = require('../modules/service/response');
const message = require('../config/message');
const Users = require("../models/Users");
const Notes = require("../models/Notes");

exports.createNotes = async function (req, res) {
    try {
        await Notes.create(req.body, function (err, NotesResponse) {
            if (NotesResponse) return res.json(response.success(200, message.serverResponseMessage.NOTES_CREATED, NotesResponse));
            else return res.json(response.success(204, message.serverResponseMessage.FAILURE_NOTE_CREATE, err));
        });
    } catch (error) {
        return res.json(
            response.failure(204, message.serverResponseMessage.Catch_Error, error)
        );
    }
};



exports.myNotes = async function (req, res) {

    try {

        let perPage = 10;

        const page = Math.max(0, req.body.page);

        if (req.body.perPage) {

            perPage = req.body.perPage;

        }

        const pagination = { skip: perPage * page, limit: perPage };

        let whereArr = { userId: req.body.userId };
        Notes.countDocuments(whereArr, async function (err, count) {

            const data = await Notes.find(whereArr, {}, pagination).sort({ updatedAt: -1 });

            const responseObj = {};

            responseObj["data"] = data;

            responseObj["totalpage"] = Math.ceil(count / perPage);

            responseObj["perpage"] = perPage;

            responseObj["total"] = count;

            return res.json(response.success(200, message.serverResponseMessage.YOUR_NOTES, responseObj));

        });

    } catch (error) {

        console.log('error', error);

        return res.json(response.failure(204, message.serverResponseMessage.Catch_Error, error));

    }

};


