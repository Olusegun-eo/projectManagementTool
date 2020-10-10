import React, { Component } from 'react';

export class SiginUp extends Component {
  state={
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    // console.log(e)
    this.setState({ 
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    console.log(this.state);
  }  

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" autoComplete="username" onChange={this.handleChange}/>  
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}
export default SiginUp