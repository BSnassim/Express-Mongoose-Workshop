const mongo = require("mongoose");
const schema = mongo.Schema;
const Classroom = new schema(
    {
        class: String,
        capacity: Number
    }
)

module.exports = mongo.model("classroom",Classroom);