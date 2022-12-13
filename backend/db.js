const  mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Aman1:8745030106aman@cluster0.g9pjvol.mongodb.net/test"
// "mongodb+srv://Aman:8745030106aman@cluster0.rjzgrtn.mongodb.net/test"

// const connectToMongo = () =>{
//     mongoose.connect(mongoURI, ()=>{// u can use async await also 
//         console.log("connected to Mongo successfully");
//     })
// }
const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(()=>console.log("connection success"))
    .catch((err)=>console.log(err));
}

module.exports = connectToMongo;