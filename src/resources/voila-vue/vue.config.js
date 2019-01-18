const glob = require("glob");
const fs = require('fs')
const path = require("path");
const PAGES_PATH = path.resolve(__dirname, "./src/pages/");
const DEST_PATH = path.resolve(__dirname, "../views/");

let pages = {};

glob.sync(PAGES_PATH + "/**/*.js").forEach(filepath => {
    const baseName = path.basename(filepath, ".js");
    const prefix = path.relative(PAGES_PATH, path.dirname(filepath)).replace("/", ".").replace("\\", ".")
    const entry = path.join("src", "pages", prefix, baseName + ".js");
    const pageName = prefix !== '' ? (prefix + '.' + baseName) : (baseName)

    let template

    if (!fs.existsSync(filepath.replace('.js', '.html'))) {
        template = path.join(PAGES_PATH, '_default.html')
    } else {
        template = filepath.replace('.js', '.html')
    }

    let targetFile

    if (process.env.NODE_ENV === "production") {
        targetFile = path.join(
            DEST_PATH,
            path.relative(PAGES_PATH, path.dirname(filepath)),
            baseName + ".blade.php"
        );
    } else {
        targetFile = path.format(
            {
                dir: path.relative(PAGES_PATH, path.dirname(filepath)),
                base: path.basename(filepath).replace('.js', '.html')
            }
        )
    }


    pages[pageName] = {
        entry: entry,
        filename: targetFile,
        template: template
    };
});

console.log(pages);

module.exports = {
    outputDir: "../../public",
    pages: pages,
    lintOnSave: false
};
