module.exports = {
  baseUrl: '/superv/',

  outputDir: '../../public/vendor/superv/',

  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/superv.blade.php'
    : 'index.html',

}