const PostModel = require('./posts.model');

const postController = {
    newPost: function (request, response) {
        const postData = request.body;

        //---------- TITLE VALIDATION ----------
        if (postData.title.length === 0 || postData.title === '' || (/[^0-9A-Za-z ]/.test(postData.title))) {
            response.status(400).send({
                error: 'Invalid title'
            });
            return;
        }

        //----------KEYWORDS VALIDATION ----------
        if (!(Array.isArray(postData.keywords))) {
            response.status(400).send({
                error: 'Keywords must me array type'
            });
            return;
        }

        //Convert to array of objects
        const mappedKeywords = postData.keywords.map(item => {
            return {keyword: item}
        });
        postData.keywords = mappedKeywords;

        //----------IMAGE VALIDATION ----------
        if (!postData.imageUrl || !(typeof postData.imageUrl === 'string')) {
            response.status(400).send({
                error: 'Invalid image url'
            });
            return;
        }

        //Check if user exists
        if (!request.user) {
            response.status(300);
            return;
        }

        //The author id in db goes to the author id in the post data
        postData.authorName = request.user.username;

        //Create Post
        PostModel.create(postData, (error, post)=> {
            if(error) {
                response.status(400).send({
                    error: `Post unsuccessful: ${error}`
                });
                return;
            }

            response.send({
                message: 'Post successful'
            });

            request.user.posts.push({postId: post._id});
            request.user.save();
        });
    },
    getPost: function (request, response) {
        PostModel.findById(request.params.id, (error, post)=> {
            if (error) {
                response.status(400).send({
                    error: `Can't find post: ${error}`
                });
                return;
            }

            response.status(200).send({
                post: post.toObject()
            })
        })
    }
};

module.exports = postController;