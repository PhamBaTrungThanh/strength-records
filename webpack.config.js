module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['airbnb'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                    query: {
                        optional: 'runtime',
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
};
