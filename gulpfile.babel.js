const { src, dest, parallel } = require("gulp");
// CSS
const sass = require("gulp-sass")(require("sass"));
// JS
const babel = require("gulp-babel");

const transpileSass = () => {
    return src("./ui/src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./ui/public/css"));
};

const transpileBabel = () => {
    return src("./ui/src/js/*.js")
        .pipe(
            babel({
                presets: ["es2015"]
            })
        )
        .pipe(dest("./ui/public/js"));
};

const transpileBabelHelpers = () => {
    return src("./ui/src/js/helpers/*.js")
        .pipe(
            babel({
                targets: {
                    chrome: "58",
                    firefox: "52"
                },
                presets: ["es2015"]
            })
        )
        .pipe(dest("./ui/public/js/helpers"));
};

exports.default = parallel(
    transpileSass,
    transpileBabelHelpers,
    transpileBabel
);
