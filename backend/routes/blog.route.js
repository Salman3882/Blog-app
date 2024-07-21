const router = require('express').Router()
const Blog = require('../models/blog.model')
const User = require('../models/user.model')
const { authentication } = require('../auth/auth.js')
const upload = require('../middlewares/multer.middleware.js')
const {uploadImage} = require('../utils/uploadImage.js')

// GET ALL BLOGS 
router.get('/get-all-blogs', async (req, res) => {
    try {
        const blogs = await Blog.find()
        return res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server error" })
    }
})

// ADD BLOG
router.post('/add-blog', authentication,upload.single("blogImage"), async (req, res) => {
    try {
        const { title, description, blogImage } = req.body
        const { id } = req.headers
        const result = await uploadImage(req.file.path)

        const newBlog = new Blog({
            title,
            description,
            blogImage:result.secure_url
        })

        const savedBlog = await newBlog.save()
        const blogId = savedBlog._id
        await User.findByIdAndUpdate(id, { $push: { blogs: blogId } })
        return res.status(200).json({ message: "Blog added successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal sever error" })
    }

})

// GET USER BLOGS
router.get('/get-user-blogs', authentication, async (req, res) => {
    try {
        const { id } = req.headers
        const userBlogs = await User.findById(id).populate({
            path: "blogs",
            options: { sort: { createdAt: -1 } }
        })
        return res.status(200).json(userBlogs)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server error" })
    }


})

// DELETE BLOG 
router.delete('/delete-blog/:id', authentication, async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.headers
        await Blog.findByIdAndDelete(id)
        await User.findByIdAndUpdate(userId, { $pull: { blogs: id } })
        return res.status(200).json({ message: "blog deleted successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
})

// UPDATE BLOG
router.put('/update-blog/:id', authentication, async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, blogImage } = req.body
        await Blog.findByIdAndUpdate(id, {
            title,
            description,
            blogImage
        })
        return res.status(200).json({ message: "Blog updated successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server error" })

    }
})



module.exports = router