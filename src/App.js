import React, { Component } from 'react';
import Github from './components/Github';
import GithubData from './components/GithubData';

export default class App extends Component {
  state={
    accounts:[],
    value:""
  }

  
  userValue=(e)=>{
    // console.log(e.target.value);
    this.setState({
      value:e.target.value
    })
  }



  submitUser=(e)=>{
    e.preventDefault();
    
    // console.log(this.state.value); 
    let value=this.state.value
    this.setState({
      value:this.state.value
    })
 
    this.githubSearch(value);
    
    
    // console.log(this.state.accounts);
  }

  async githubSearch (value) {
  const userUrl=`https://api.github.com/users/${value}?client_id=07618eec8bf77e1405a1&client_secret=29e2101097a8bf79bb1c534f49d1962c33ed7519`;   
   const data=await fetch(userUrl);
   const jsonData=await data.json();
   this.setState({
     accounts:jsonData
   })
  }

  componentDidMount(){
    this.githubSearch();
  }

  render() {
    
    return (
      <div>
      <Github submitUser={this.submitUser} userValue={this.userValue} />
      <GithubData accounts={this.state.accounts}></GithubData>
      </div>
    )
  }
}
