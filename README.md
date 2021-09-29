#Run React Timers App On Local 

1) Clone the Github repo to a local folder. 
2) From the folder, run `npm install`. 
3) To set up a proper development environment to work with the code, run:

`npm install eslint --save-dev
npm install eslint-config-standard --save-dev
npm install eslint-config-standard-jsx --save-dev
npm install eslint-plugin-react --save-dev
npm install eslint-plugin-import --save-dev
npm install eslint-plugin-node --save-dev
npm install eslint-plugin-promise --save-dev
npm install eslint-plugin-standard --save-dev`

4) In a terminal window run `npm run start` to run the React app in your browser on the local development server at `http://localhost:3000`.
5) In another terminal window run `npm run server` to run the json-server stand-in REST API. 

#Notes For Learning With This App

1) The "backend" data object can be inspected in the `db.json` file, including changes, and can also be seen at`http://localhost:7000/timers` in your browser.  
2) This app was created using Create React App. 
3) This app was created based on a project in the excellent book `Fullstack React: The Complete Guide to ReactJS and Friends` by Anthony Accomazzo, Nate Murray, Ari Lerner, Clay Allsopp, David Guttman, and Tyler McGinnis [https://www.newline.co/fullstack-react/].  
4) For an excellent intro to React function components using hooks, see Brad Traversy's tutorial on YouTube channel Traversy Media, the `React Crash Course 2021` [https://www.youtube.com/watch?v=w7ejDZ8SWv8].  
5) For an excellent explanation of the `userReducer` React hook, see the article `Examples of the useReducer Hook` by Dave Ceddia [https://daveceddia.com/usereducer-hook-examples/].  


