
module.exports = {
    publicPath: '',
    chainWebpack: config => {
        config
            .plugin('html')
            .minimizer('terser')
            .tap(args => {
                args[0].title = 'John Uberbacher'
                return args
            })
    }
}