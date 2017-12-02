import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import User from './pages/User'
import UserList from './pages/UserList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true,
      userList: []
    }
    this.fetchList()
  }
  fetchList () {
    window.fetch('https://raw.githubusercontent.com/fsticza/intellyo/master/db.json', {
      headers: {
        'Accept': 'application/json'
      },
    })
     .then(res => res.json())
     .then(userList => {
       this.setState({userList})
     })
     .catch(err => console.error(err))
     .then(() => {this.setState({isFetching: false})})
  }
  render() {
    const { userList, isFetching } = this.state
    return (
      <Router>
        <div className="">
          <header className="">
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">React Users</Link>
            </nav>
          </header>
          <main className="container mt-4">
            {isFetching &&
              <div className="alert alert-info">
                Fetching user list...
              </div>
            }
            <Route exact path="/" render={ routeProps => (
              <UserList userList={userList} {...routeProps} />
            )} />
            <Route path="/users/:userId" render={ routeProps => (
              <User userList={userList} {...routeProps} />
            )} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
