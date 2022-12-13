/*const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8Education');
        console.log("connect sucessfully");
    } 
    catch (error) {
        console.log("connect fail");
    }
}

module.exports ={connect};*/


const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8Education");
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("failed to connect to mongodb");
  }
}
module.exports = { connect };
