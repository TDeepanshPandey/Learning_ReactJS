[![wakatime](https://wakatime.com/badge/user/d9585be0-a800-4e7a-9c42-e2fb31c12a87/project/018b7d15-06fc-4dce-8861-610f758cca18.svg)](https://wakatime.com/badge/user/d9585be0-a800-4e7a-9c42-e2fb31c12a87/project/018b7d15-06fc-4dce-8861-610f758cca18)

# Learning_ReactJS

 Learning React JavaScript

## Commands

- `npm install` - Install all dependencies from package.json
- `npm install package-name --save` - Install a package and save it to package.json
- `npm install package-name --save-dev` - Install a package and save it to package.json as a dev dependency 
- `npm uninstall package --save` - Uninstall a package and remove it from package.json
- `npm update --save` - Update all packages in package.json
- `npm install package -g` - Install a package globally
- `npx create-react-app app-name` - Create a new React app. **This is deprecated**
- `npm create vite@latest card-app-project -- --template react` - Create a new React app using Vite
- `npm start` - Start the development server

## React

- Example of a React Component: A react component is a class that extends the `Component` class from the `react` package. It has a `render` method that returns JSX.

```jsx
import { Component } from 'react'
class App extends Component {
```

- Example of a React Component with a constructor: A constructor is a method that is called when a new instance of a class is created. It is used to initialize the state of the component.
- The `super()` method is used to call the constructor of the parent class.
- The `this.state` object is used to store the state of the component.
  
```jsx
class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'TDP'
    }
  }

this.state.name // calls the value of name
```

- Example of a setState method: The `setState` method is used to update the state of a component. It takes an object as an argument and merges it with the current state object.

```jsx
<button 
            onClick={() => {
              this.setState({ name : 'Deep' })
            }}> Change Name </button>
```

- Example of a setState method with a callback: The `setState` method can take state and callback function as a second argument. This callback function is called after the state has been updated.
- Props are immutable and cannot be changed by the component that receives them. They are passed down from the parent component.
- The `this.props` object is used to access the props of a component.
- The `this.props.children` property is used to access the children of a component.

```jsx
this.setState((state, props) => { return {name : 'Deep' }}, () => {console.log(this.state.name)})
```

- Example of a Map: The `map` method is used to iterate over an array and return a new array with the results of the callback function.
- : Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
  
```jsx
 <div className='App'>
          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>
            })
          }
        </div>
```

- Example of a lifecycle method: The `componentDidMount` method is called after the component has been rendered to the DOM. It is used to fetch data from an API or perform other side effects.
- The `fetch` method is used to make a network request to a URL and returns a promise.
- Promise - A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In JavaScript (including React), asynchronous programming allows code execution to continue without waiting for long-running operations (such as API calls, file reading, or database queries) to complete. This helps prevent UI blocking and ensures a smooth user experience.
- The `then` method is used to handle the result of a promise.

```jsx
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return{monsters: users}
      }))
  }
```

- Optimizations: Use variables in the render method to store values that are used multiple times, instead of using this.state many times. This can help improve performance by reducing the number of calculations in the render method.
- Take methods out of the render method and define them as class methods. This can help improve performance by reducing the number of calculations in the render method.

```jsx
    const { monsters, searchfield } = this.state
    const { onSearchChange } = this

  onSearchChange = (event) => {
      const searchfield = event.target.value.toLocaleLowerCase()
      this.setState(() => {
        return { searchfield }
      })
    }
```
