# Wiki

This is a Wikipedia-like online encyclopedia. Encyclopedia entries are stored on a remote server as Markdown files. We read and write those files via a [REST api](https://wiki-rest-api.herokuapp.com/api/).

## Usage

**All Pages:** Go to the `Homepage` to view a list of all available pages.
**Entry Page:** Visiting `/wiki/TITLE`, where `TITLE` is the title of an encyclopedia entry, renders a page that displays the contents of that encyclopedia entry.
**Search:** The user is allowed to type a query into the search box in the sidebar to search for an encyclopedia entry.
* If the query matches the name of an encyclopedia entry, the user is redirected to that entry’s page.
* If the query does not match the name of an encyclopedia entry, the user is instead be taken to a search results page that displays a list of all encyclopedia entries that have the query as a substring. For example, if the search query were Py, then Python should appear in the search results.
* Clicking on any of the entry names on the search results page takes the user to that entry’s page.

**New Page**: Clicking `Create New Page` in the sidebar takes the user to a page where they can create a new encyclopedia entry.
* Users can enter a title and, in a  [`textarea`](https://www.w3schools.com/tags/tag_textarea.asp), enter the Markdown content for the page.
* When the page is saved, if an encyclopedia entry already exists with the provided title, the user is presented with an error message.
* Otherwise, the encyclopedia entry is saved to disk, and the user is taken to the new entry’s page.

**Edit Page**: On each entry page, the user can click a link to be taken to a page where the user can edit that entry’s Markdown content in a `textarea`.

* The  `textarea`  is pre-populated with the existing Markdown content of the page.
* Once the entry is saved, the user is redirected back to that entry’s page.

**Random Page**: Clicking “Random Page” in the sidebar takes the user to a random encyclopedia entry.

**Prompt**: If any changes in any of the forms are detected, going away to another page without saving the form will display a prompt to the user.


## Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Built With

* [React](https://reactjs.org/) - The JavaScript library used.
* [Django REST Framework](https://www.django-rest-framework.org/) - Used to build the REST API.
* [Heroku](https://heroku.com/) - Where the REST API is hosted.
* [Netlify](https://www.netlify.com/) - Where this app lives.