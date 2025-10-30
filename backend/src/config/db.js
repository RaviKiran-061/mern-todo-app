const mongoose = require('mongoose'); 

const connectDB = async () => {
    await mongoose
            .connect(process.env.MONGO_URI)
            .then(()=> console.log('DB connected successfully.'))
            .catch((err)=> {
                console.log('Error! unable to connect to DB.', err)
                process.exit(1) // exit with failure
            });
}
    

module.exports = connectDB;