# Answers




- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    - React is a JS library that is designed around building resuable components and prioritizes the rednering of the DOM to make dynamic applications. This is done by maintaing a virtual DOM, maintaining the sate and using methods to update the dom/state automatically. These passing of state and methods as props is how React is known to be unopionated because it only includes what is necessary for building your application. Anything else must be imported.

- [ ] What does it mean to _think_ in react?  
    - This means thinking about how the website you want to build can be broken into reusuable and dynamic pieces of code (ie : components) and what state and methods you will need to make sure you achieve the desired level of functionality for the application.

- [ ] Describe state.
    -State is the heart of an React app in that is a property of a class component which is usually an object that contains our data. State is usually set in ones constructor function and is updated through using this.setState() methid. Without this method, it is immutable. 

- [ ] Describe props.
  - If state is the heart, the props ("properties") is the blood that runs through the react application. This allows us to utilize the different components and files that we create that makes up the applicaiton. Functional components achieve this by having props be an object that can be passed as an argument.

  1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    - A functional component simply returns the JSX component while the class compoonent has an explicit render method. A class component possess the ability to set and maintain our state, where the functional component does have any "state" capabilities. These components can only receive props. You can also use setState state to define methods on the components with class components. 