import blogModel from "../models/blogModel.js"
class BlogController{
    static getAllBlogs=async (req,res)=>{
        try {
            const fetchAllBlogs = await blogModel.find({});
            return req.status(200).json(fetchAllBlogs)
}
        catch(error){return res.status(400).json({message:error.message})}};
    static addNewBlog = async (req, res) => { 
        const { title, category, description } = req.body;
        try {
            if (title && category && description) {
                const addBlog = new blogModel({
                    title: title,
                    description: description,
                    category: category,
                    thumbnail:req.file.filename,
                })
            }
            else {
            return res.status(400).json({ message: "All fields are required" });
                
            }
         }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    static getSingleBlog = async (req, res) => {res.send("get single blog") };
}
export default BlogController;