import React, { Component } from 'react';
import './Github.css';

export default class Github extends Component {
    
  render() {
      const {userValue,submitUser}=this.props;
    return (
      <div className="Github">
          <h1 style={{margin:"1rem 4rem"}}>Search Github User  <i className="fab fa-github-square"></i></h1>
          <form  onSubmit={submitUser} action="App.js">
            <input onChange={userValue} placeholder="Search Github User" type="text"/>
            <button onClick={submitUser} type="button">Search</button>
          </form>
      </div>
    ) 
  }
}
