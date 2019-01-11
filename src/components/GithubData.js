import React, { Component } from 'react';
import './GithubData.css';

export default class GithubData extends Component {
  render() {
      const {accounts}=this.props;
    //   console.log(accounts);
      var name="";
      if(accounts.name!==null){
        name="Name : "+accounts.name;
      }else if(accounts.name===null){
          name="";
      }
      if(accounts.url==="https://api.github.com/users/undefined" ){
       return(
            <div>
        </div>
       )
      }
      if(accounts.message==="Not Found"){
          
          return (
              <div className="NotFound">User not found</div>
          )
      }
    return (
      <div className="GithubData">
      <div className="img"><img src={accounts.avatar_url} alt=""/></div>
       <div className="p">  
        <p>{name}</p>
        <p>Github: <a href={accounts.html_url}>Click here</a></p>
        <p>Public Repos : {accounts.public_repos}</p>
        <p>Followers : {accounts.followers}</p>
        </div>
      </div>
    )
  }
}
