module.exports = {
    lintOnSave: false,
    outputDir: '../backend/public',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/techBlog/'
    : '/'
}