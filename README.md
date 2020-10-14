# Weater App Modec - Documentation





## Main technologies used

**React.js**

  I used Create React App to initialize a React app structure and build the project UI components.

**Typescript**

  Language used in order to maintain type safety, track of the data types flowing through the app and fast error feedback during development.

**Redux**

  In order to share component state and avoid making requests to get data I already had fetched, I built a simple redux setup that consisted in a reducer to store the cities list in memory.

**Google-map-react component + Google Cloud Platform**

  The app map solution was a mix of a pre-made component for encapsulating Google Maps Javascript and the Google Cloud Platform services for maps, I had to configure a new app in the console and get the key for that specific api. the key is in api-keys.txt.

**Axios + Open Weather Map**

 I used Axios for executing Http calls to the Open Weather Map api endpoint and receiving the weather data for the 15 cities around the map coordinates previously set.

**Styled Components and Material UI**

  I used Styled Components to build my custom components styling and some pre-made components from Material UI lib to speed up the ui production process and standardization.


**Main items in the project structure under src folder**

  - App.tsx file

    Entry point with the app routes

  - components folder

    All reusable components
  
  - pages folder

    Smart components that hold state and logic used to render complete pages
  
  - reducers folder

    State management

  - types folder

    Type definitions used through the app



## Running the project


**Fisrt step: Environment variables**

  Create a `.env.local` in the project root the with contents of the file `api-keys.txt`,
  it will make the api keys for Google Maps and OpenWeather avaiable in your developement enviroment and won't send them to CVS.



**Second Step: Project dependencies**

  Open a terminal in the project root folder and type the command ```yarn install``` to install all project dependencies. 
  In case you don't have Yarn check its docs on how to make the installation process here https://classic.yarnpkg.com/en/docs/getting-started



**Third Step: Running the app**

  After dependencies being installed you can run ```yarn start``` to run the project. You browser will open automatically, if it doesn't visit http://localhost:3000/ to check the app running

