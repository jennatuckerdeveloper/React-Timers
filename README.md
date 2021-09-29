# Run React Timers App On Local 

1) Clone the Github repo to a local folder. 
2) Move into the created folder of files including `package.json` and run `npm install`. 
3) In a terminal window run `npm run start` to run the React app in your browser on the local development server at `http://localhost:3000`.
4) In another terminal window run `npm run server` to run the json-server stand-in REST API. 

# Notes For Learning With This App

1) The "backend" data object can be inspected in the `db.json` file, including changes, and can also be seen at`http://localhost:7000/timers` in your browser.  
2) This app was created using Create React App. 
3) This app was created based on a project in the excellent book `Fullstack React: The Complete Guide to ReactJS and Friends` by Anthony Accomazzo, Nate Murray, Ari Lerner, Clay Allsopp, David Guttman, and Tyler McGinnis [https://www.newline.co/fullstack-react/].  
4) For an excellent intro to React function components using hooks, see Brad Traversy's tutorial on YouTube channel Traversy Media, the `React Crash Course 2021` [https://www.youtube.com/watch?v=w7ejDZ8SWv8].  
5) For an excellent explanation of the `userReducer` React hook, see the article `Examples of the useReducer Hook` by Dave Ceddia [https://daveceddia.com/usereducer-hook-examples/].  
6) Your dev environment should respond to changes to `.eslintrc.json` file.  To check setup, change the `quotes` rule from `single` to `double`.  Restarting the dev server should populate error messages, and `npm run lint` should autofix.  If your dev environment does not respond to changes to this file when you change the file and restart the dev server, troubleshooting advice can be found online for setting up specific IDE's with `eslint`.  

# Component Tree Design Sketch 

App 
- Title 
- AllTimers
- HideableAddTimer 

AllTimers
- Editable Timer components 

Editable Timer
- determines whether to show Timer or TimerForm 

Timer
- title 
- project
- display running timer 
- delete button 
- edit button 
- delete button 
- start / stop timer button 

Hideable Add Timer 
- determiners whether to display + icon or Timer Form 

Timer Form
- onclick methods 
- text Add or Edit

StartStopButton 
