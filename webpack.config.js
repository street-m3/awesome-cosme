const developmentMode = 'development'

const main = {
    mode: developmentMode,
    entry: `./assets/src/js/index.js`,

    output: {
        path: `${__dirname}/assets/dist/js`,
        filename: "main.js"
    },

    resolve: {
        extensions: ['.js', '.json', '.wasm'],
    },
}

module.exports = [ main ]