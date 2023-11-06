import {Component} from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
  };
  console.log('constructor');
}
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> this.setState(()=> {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }
      ));
  }

  onSeachChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchField};
    });
  }

  render () {

    const {monsters, searchField} =  this.state;
    const {onSeachChange} = this;

    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log('render');
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex Tutorial</h1>
        <SearchBox onChangeHandler={onSeachChange} placeholder='Search Monsters' className = 'search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }  
}

export default App;
