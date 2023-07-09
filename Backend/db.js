//mongodb+srv://kaiserlaurie:<password>@cluster0.c6bouj1.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const conn_str = `mongodb+srv://${username}:${password}@cluster0.c6bouj1.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    try{
        await mongoose.connect(conn_str, {                      //connect returns promise, so await is needed
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas");
    }catch(error){
        console.log("Error connecting to MongoDB Atlas"), error;
        throw error;
    }
}

const disconnectFromDatabase = async () => {
    try{
       await mongoose.disconnect();
        console.log("Disconnected from MongoDB Atlas");
    }catch(error){
        console.log('Error disconnecting from MongoDB Atlas', error);
        throw error;
    }
};

module.exports = {
    connectToDatabase,
    disconnectFromDatabase,
}