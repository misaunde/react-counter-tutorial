Tutorial Source:
https://www.youtube.com/watch?v=Ke90Tje7VS0



## Study Notes

Learn React - React Crash Course 2018 - React Tutorial with Examples | Mosh

From <https://www.youtube.com/watch?v=Ke90Tje7VS0> 


Angular is a Framework, but React is a View Library. Simple api that reacts to your data chages and updates your view, but you get to choose whatever other libraries, etc you want to do routing, etc for example

Ups and downs to frameworks vs libraries

Extension for Code:

Simple React Snippets
Also a format on save extension

Download cli:

`Npm I -g create-react-app@1.5.2`

Create starter app:

`Create-react-app react-app`



React snippets:

`Imrc - import React and component`
`Cc - create component`

React Developer Tools:

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

Finally learned what $0 was (in normal devtools)

"The component that owns a piece of state, should be the one modifying it."
State is private and internal to a component
Still have to deal with sending events to edit parent's state though


Like:
  - Communication between parent and child elements looks nice -> this.props
  - assigning any properties to element (BUT PROPS IS READ-ONLY)
  - transclusion of complex elements is easily done with this.props.children
  - less configuration than angular


Don't like
   - Passing functions to event handlers, esp functions that take input parameters
   - Immutable state is nice, but kind of annoying at the same time
   - Kind of miss services
   - ReactDOM.render() makes sense, but is a little weird
   - Seems like having code and html in same file could get crowded: "For all that is good about JSX, there are some valid criticisms: by blurring the line between JavaScript and HTML, it makes it a bit too easy to start writing complex code in your template which should instead be separated out and written elsewhere in your JavaScript view code." https://medium.com/@dalaidunc/10-things-i-love-about-vue-505886ddaff2 





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



