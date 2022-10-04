// entry -> output
const path = require('path');

//find the path to the folder
//console.log(path.join(__dirname, 'public'));

module.exports= {
    entry: './src/app.js',
    output: {
        //path: '/Users/khanmohammed1/Desktop/react-course-projects/indecision-app',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

//loader 