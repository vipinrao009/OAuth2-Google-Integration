import mongoose from "mongoose";

const connectToDB = async()=>{
    console.log(process.env.MONGO_URI)
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        if(connection){
            console.log(`DB is connected ${connection.host}`)
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToDB;