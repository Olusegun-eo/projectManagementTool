import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';



const NavBar = (props) => {
  const { auth } = props
  // console.log(props)
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">DailyPlan</Link>
       {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state); 
  return{
    auth: state.firebase.auth
  }
}

export default  connect(mapStateToProps)(NavBar);
