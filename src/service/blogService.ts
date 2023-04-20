import {Blogs} from "../entity/blogs";

class BlogService {
    findAll = async () => {
        let listBlog = await Blogs.find().populate("user");
        return listBlog;
    }
    findBlogByUser = async (id) => {
        return await Blogs.find({user: id}).populate("user")
    }
    addBlog = async (blog) => {
        await Blogs.create(blog);
    }
    showBlogEdit = async (id) => {
        let blog = await Blogs.find({_id: id});
        // console.log(typeof product)
        // console.log(product)
        return blog[0];
    }
    editBlog = async (id, blog) => {
        await Blogs.updateOne({_id: id},
            {
                $set:
                    {
                        titleBlog: `${blog.titleBlog}`,
                        textBlog: `${blog.textBlog}`,
                        image: `${blog.image}`
                    }
            })
    }
    deleteById = async (id) => {
        await Blogs.deleteOne({_id: id});
    }
    searchBlogs = async (letter) => {
       return await Blogs.find({textBlog: {$regex: letter, $options: 'i'}}).populate('user')
    }
}

export default new BlogService()