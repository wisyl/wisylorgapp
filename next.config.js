
module.exports = {
  publicRuntimeConfig: {
    //  TODO: Create environment specific configurations for this
    BASE_URL: `http://localhost:${process.env.PORT}`
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, //25s
    pagesBufferLength: 10
  },
  webpack: (config, options) => {
    config.node = {
      dns: 'mock',
      net: 'mock'
    }
    
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
    )
    return config
  }
}