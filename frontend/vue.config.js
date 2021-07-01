module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/techBlog/'
    : '/',
    outputDir:'docs'
}