const glob = require('glob')
const path = require('path')
const PAGES_PATH = path.resolve(__dirname, './src/pages')

glob.sync(PAGES_PATH + '/*/main.js').forEach(filepath => {
    const pageName = path.basename(path.dirname(filepath))
    const templatePath = path.dirname(filepath) + '/blade.php'

    pages[pageName] = {
        entry: filepath,
        filename: `${pageName}.blade.php`,
        template: templatePath
    }


})


module.exports = {
    outputDir: '../views',
    pages: pages
};
