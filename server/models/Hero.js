const {Schema,model} = require('mongoose');

const HeroSchema = new Schema({

    nickname:{
        type:String,
        required:true,
    },
    real_name:{
        type:String,
        required:true,
    },
    origin_description:{
        type:String,
        required:true,
    },
    superpowers:{
        type:String,
        required:true,
    },
    catch_phrase:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        default:[]
    }
},{timestamps:true});

module.exports = model("Hero",HeroSchema);