// const path = require('path');


// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname,'./src/index.js'),

//     output: {
//         path: path.resolve(__dirname,'dist'),
//         filename: 'bundle.js',
//     },
// }

const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development' // Change to 'production' for minification
};
