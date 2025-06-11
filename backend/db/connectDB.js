// @ts-nocheck
import mongoose from 'mongoose'



export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Auth_DB';
        const conn = await mongoose.connect( dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } )
        console.log(`DB Connected Successfully: ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Error connection to MongoDB: ",error.message);
        process.exit(1) //failure, 0 stvatus is success
    }
}