const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema(
    {
        title: {

            type: String,

        },
        body: {

            type: String,

        },
        userId: {

            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'users'
        },
    },
    {
        timestamps: true,
    },
)


const notes = mongoose.model("notes", notesSchema);

module.exports = notes;