import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar, NoteCardCollection, NoteCreateForm, UICreateNote, WelcomePage} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
//import NewNote from './NewNote'
// We began this June 16th 2024
class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<WelcomePage/>} />
{<Route exact path='/new' element= {<UICreateNote/>} /> }

</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);