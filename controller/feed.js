exports.getFeeds = (req,res,next) => {
    res.status(200).json({
        posts: [{title : 'First Get Req', content: 'getting the first post request'}]
    })
};