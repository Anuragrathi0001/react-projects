import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    title: {
        type: string,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "categories",
    },
    description:{
        type:String,
    },
    thumbnail: {
        type: string,
    },
    user: {
        type: mongoose.Schema.types.ObjectId,
        refer:"users",
    },
});
const blogModel = mongoose.model("blogs", blogSchema);
export default blogModel;