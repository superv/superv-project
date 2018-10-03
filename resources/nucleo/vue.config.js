module.exports = {
  baseUrl: '/',

  outputDir: '../../../../../public/acp/',

  indexPath: process.env.NODE_ENV === 'production'
    ? '../../resources/views/index.blade.php'
    : 'index.html'
}