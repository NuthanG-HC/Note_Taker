const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function main(){
   await mongoose.connect("mongodb+srv://Nuthan:nuthan123@cluster0.y1tv2xl.mongodb.net/noteApp?retryWrites=true&w=majority")
        console.log("Successfully connected to DB");
}
module.exports = main;