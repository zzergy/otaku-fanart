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

        //convert to array of objects
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
        })
    }
};

module.exports = postController;