const path = require('path');
const webpack = require('webpack');  // Correct import for webpack

module.exports = {
  // Entry point of your application (React app)
  entry: './src/index.js', // Change this if your entry file is located elsewhere

  // Output configuration
  output: {
    path: path.resolve(__dirname, './static/frontend'), // Output folder
    filename: 'main.js', // Output file
  },

  // Module configurations for different file types
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS
        },
      },
      {
        test: /\.jsx$/, // JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // CSS files
        use: ['style-loader', 'css-loader'], // Apply style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Image files
        use: {
          loader: 'file-loader', // Use file-loader for images
          options: {
            name: '[name].[ext]', // Preserve image name and extension
            outputPath: 'images/', // Save images in 'images' folder
          },
        },
      },
    ],
  },

  optimization: {
    minimize: true,  // Enable code minimization
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"), // Ensure a single value is defined
    }),
  ],

  // Development server setup
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Directory to serve static files
    port: 3000, // Port number for the server
    hot: true, // Enable hot module replacement (HMR)
    historyApiFallback: true, // Useful for single-page apps (SPA)
  },

  // Resolve extensions (so you can omit them in imports)
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Enable source maps for debugging (optional)
  devtool: 'source-map',
};
