import mongoose from "mongoose";
const connectoMongo = async () => {
    const res = await mongoose.connect("mongodb://localhost:27017/blog-mern-project");
    if (res) {
        console.log("connected sucesfully ");
    }
};
export default connectoMongo;