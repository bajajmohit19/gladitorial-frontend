
module.exports = {
    babel: {
        preset: [
            [
                '@babel/preset-react',
                {
                    legacy: true
                }
            ]
        ]
    },
    webpack: {
        configure: {
            target: 'web',
            optimization: {
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true
                    }),
                ],
            },
        },
    },
}