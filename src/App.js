import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import TenantsPage from './pages/TenantsPage';
import MessagesPage from './pages/MessagesPage';
import VotingsPage from './pages/VotingsPage';
import jsonUsers from './data/users.json'
import jsonAccounts from './data/accounts.json'
// import jsonRecipes from './data/recipes.json'


// State
// activeUser - object - a User object contains the details for the active user.
//  If there is no active user this state will hold the value of null.
// isCommittee - boolyan - says is the user is committee member or not.

// users - array - an array that contains all the users in the system (this is a HACK
//   since we don't have a server side)

// recipes - array - an array that contains all the recipes in the system (this is a HACK
//   since we don't have a server side)
class App extends React.Component {

  constructor(props) {
    super(props);
        
    this.state = {

      activeUser: null,
      // activeUser: {
      //   id: 123,
      //   name: "John Doe",
      //   email: "john@john.com",
      //   apartment:6,
      //   pwd:"123",
      //   isTenant: true,
      //   isCommitteeMember: true
      // },     
      users: jsonUsers,
      accounts: jsonAccounts
      // messages: jsonMessages
    }
  
  //   this.handleLogout = this.handleLogout.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
     this.handleSignup = this.handleSignup.bind(this);
  //   this.handleNewRecipe = this.handleNewRecipe.bind(this);

  }
  

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }

  handleSignup(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }

  // handleLogout() {
  //   this.setState({
  //     activeUser: null
  //   })
  // }

  // handleNewRecipe(recipe) {

  //   const { activeUser, recipes } = this.state

  //   // Adding to the recipe object usedId and id
  //   recipe.userId = activeUser.id;

  //   // for id I am taking the id of the last recipe in the array and adding 1
  //   recipe.id = recipes[recipes.length - 1].id + 1;

  //   this.setState({
  //     recipes: recipes.concat(recipe)
  //   })
  // }

  render() {

    const { activeUser,users,community } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser}/>
          </Route>
          <Route exact path="/login">
            <LoginPage activeUser={activeUser} users={users} handleLogin={this.handleLogin}/>
          </Route>

          <Route exact path="/signup">
            <SignupPage activeUser={activeUser} community={community} handleSignup={this.handleSignup}/>
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/users">
            <TenantsPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/messages">
            <MessagesPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/votings">
            <VotingsPage activeUser={activeUser}/>
          </Route>          

        </Switch>
      </HashRouter>
    );
  }
}

export default App;

