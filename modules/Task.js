const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
        name : {
                type : String,
                required : [true, 'Must provide name'],
                maxlength:[20,'name cannot be more than 20 characters'],
                trim : true,
        },
        completed : {
                type : Boolean,
                default : false,
        },    
})

const Task = new mongoose.model('Task',TaskSchema)

module.exports = Task