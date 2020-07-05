const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: String
    },
    keywords: [
        {
            keyword: String
        }
    ],
    comments: [
        {
            authorId: String,
            comment: String
        }
    ],
    likes: {
        type: Number,
        default: 0
    }

});


const postsModel = mongoose.model("posts", PostsSchema);
module.exports = postsModel;