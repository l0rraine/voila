const glob = require('glob')
const path = require('path')
const PAGES_PATH = path.resolve(__dirname, './pages')
const DEST_PATH = path.resolve(__dirname, '../views')

let pages = {}

glob.sync(PAGES_PATH + '/**/*.html').forEach(filepath => {

    const pageName = path.basename(path.dirname(filepath))
    const prefix=path.relative(PAGES_PATH,path.dirname(filepath))
    console.log(prefix)
    // const templatePath = path.dirname(filepath) + '/blade.php'
    //
    // pages[pageName] = {
    //     entry: filepath,
    //     filename: `${pageName}.blade.php`,
    //     template: templatePath
    // }


})

// glob.sync(PAGES_PATH + '/*/*.html').forEach(filepath => {
//     console.log(filepath)
//     // const pageName = path.basename(path.dirname(filepath))
//     // const templatePath = path.dirname(filepath) + '/blade.php'
//     //
//     // pages[pageName] = {
//     //     entry: filepath,
//     //     filename: `${pageName}.blade.php`,
//     //     template: templatePath
//     // }
//
//
// })


module.exports = {
    outputDir: '../views',
    pages: pages
};
