
import React, { Component } from "react";
import "./App.css";
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMosters: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchMosters } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase()
      .includes(searchMosters.toLowerCase()));
    const handleChange = e => {
      this.setState({ searchMosters: e.target.value });
    }
    return (

      <div className='App'>
        <h1>Monster RoleDx</h1>
        <SearchBox placeholder='Search Monster'
          handleChange={handleChange}
        />
        <CardList monster={filterMonsters}>
        </CardList>

      </div>
    );
  }
}
export default App;