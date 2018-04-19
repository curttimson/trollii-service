var mongoose = require('mongoose');

module.exports = mongoose.model('List', {
    ownerid: String,
    name : String,
    items : [{
        name : String
    }],
    members: [{
        userid: String
    }]
});