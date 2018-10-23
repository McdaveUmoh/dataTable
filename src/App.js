import React from 'react'
import CoinTable from './components/table'

import './app.css'

class App extends React.Component {
  constructor(props) 
  {
    super(props)
    this.state = {
      isLoading: true,
      data:" ",
      data1: [],
      search: ''
    }
  }
  componentWillMount()
  {
    this.fetchData();
  }
  fetchData(){
    fetch('./data.json')
    .then(Response => Response.json())
    .then(parsedJSON => parsedJSON.data.repositories.map(user => (
        {
          name: `${user.name}`,
          forkCount: `${user.forkCount}`,
          stargazers: `${user.stargazers.totalCount}`,
          description: `${user.description}`,
          pushedAt: `${user.pushedAt}`,
          owner: `${user.owner.login}`,
          language: `${user.primaryLanguage.name}`

        }
      ))) 

    .then(data1 => this.setState({
        data1,
        isLoading:false
    }))
    .catch(error => console.log('parsing failed', error))



  }
  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    let filteredName = this.state.data1.filter(
        (data1) => {
          return data1.name.toLowerCase().indexOf(this .state.search.toLowerCase()) !== -1 ||
           data1.description.toLowerCase().indexOf(this .state.search.toLowerCase()) !== -1 ||
           data1.forkCount.indexOf(this .state.search) !== -1 ||
           data1.stargazers.indexOf(this .state.search) !== -1 ||
           data1.pushedAt.indexOf(this .state.search) !== -1 ||
           data1.language.toLowerCase().indexOf(this .state.search.toLowerCase()) !== -1 ;
        }
      );
    return (
      <div
        className="page-container"
      > 
        <span>search: </span>
        <input type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
        />
        <CoinTable
          data={filteredName}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App
