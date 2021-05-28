# News App

In this React Application you can get latest news based on the selected categories.

## Installation and Setup Instructions

In the project directory, you can run:

### `npm install`

It will install the all the node module dependencies from the package.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Reflection

This application use React Hooks for all the components.
We are using [newsapi](https://newsapi.org/) for getting all the latest news based on the selected categories.
To reduce request calls I am using response caching so If we have fetched data once we don't need to fetch it again we will use cached data to display news.
To make the page responsive I am using Flex layout.