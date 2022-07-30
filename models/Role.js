const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

RoleSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

RoleSchema.set('toJSON', {
    virtuals: true
});

module.exports = User = mongoose.model("roles", RoleSchema);
