import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const {connections } = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Successfully connected to ${connections[0].name} Database`)
    } catch (error) {
        console.log(error, "Couldn't connect to Database");
        process.exit(1);
    }
}

export default connectToDatabase;