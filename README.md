# Todo-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
📦src
 ┣ 📂todoList //component to add new board 
 ┃ ┣ 📂styles       //css files
 ┃ ┣ 📜InputArea    //Input area for new tasks
 ┃ ┣ 📜ToDoItem
 ┃ ┗ 📜todolist
 ┣ 📂shared     //components shared among different pages
 ┃ ┣ 📂formElements
 ┃ ┃ ┗ 📜Button     //custom button supporting link, anchor and button
 ┃ ┣ 📂UIElements
 ┃ ┃ ┣ 📜BackDrop    //dark background to modal and sidemenu
 ┃ ┃ ┣ 📜Modal       //to display a board over screen 
 ┃ ┃ ┣ 📜SideMenu    //Navigation bar in mobile viewport
 ┃ ┃ ┣ 📜LoadingSpinner     
 ┃ ┗ 📂navigation
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜MainHeader         //fixed on top of all pages
 ┃ ┃ ┣ 📜MainNavigation     
 ┃ ┃ ┗ 📜Navlinks
 ┣ 📂boards         //hold all tasks lists completed and incomplete
 ┃ ┣ 📂styles
 ┃ ┣ 📜dashboard    //user homepage after login to display all boards add new.
 ┃ ┗ 📜singleBoard  //main js logic and reducer component to delete tasks and mark completed tasks.
 ┣ 📂store  
 ┃ ┗ 📜index.js     //redux store for all slices     
 ┣ 📂features       
 ┃ ┣ 📜accountSlice.js      //all reducers for managing user account login logouts.
 ┃ ┗ 📜boardSlice.js    //all reducers for manipulating boards and todo lists
 ┣ 📂loginPage
 ┃ ┗ 📜loginPage        //first view login page for users
 ┣ 📂icons
 ┃ ┗ 📜to-do-list.png   //web app logo
 ┣ 📜App.css
 ┣ 📜index.css
 ┣ 📜index.js   //server file entry point Redux Store provided here
 ┗ 📜App.js     //main parent component to hold all other components.
```

## Tech-Stack

React.js - Redux front-end web application.

- Cnique id to each todo-list using uuid;
- UI elements transition on screen using react-transition-group;
- Custom stylish 3-D UI Buttons using react-awesome-buttons;
- react-router-dom for multiple pages rendering and useNavigate;
- exhaustive HTML-CSS structure for styling UI elements and more.
- React Hooks: useSelector, useHistory, useState, useDispatch.
- Javascript arrays and functions splice, findIndex, map, push, pop, forEach and more.

### App working
- A person can add, edit, or delete a todo/item. 
- Different tabs which will contain todos are called Boards.
- Different Boards will contain different todos; every todo created in a particular board is attached to that board and not visible to other boards.
- Users can add a new board according to his/her needs/requirements and also delete it accordingly.
- Boards represented in a tabular structure on the UI side so that users can click on one tab to mange the todos of a particular board.
- Todo can be added from the search bar and enlisted in the new tasks column.
- Click on the delete/cross button and the todo will be deleted forever.

## Author
- [Aakash Mishra](https://portfolio-aakash28.netlify.app/)
- [My Github ](https://github.com/Aakash-mishra2)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
