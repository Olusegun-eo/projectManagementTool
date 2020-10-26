// import { reduxFirestore } from 'react-redux';
import { getFirebase } from 'react-redux-firebase'

export const signIn = (credentials) => {
  return (dispatch, getState ) => {
    const firebase = getFirebase();//initailize firebase constant
  
   
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}


export const signOut = () => {
  return (dispath, getState ) => {
    const firebase = getFirebase();

  
    firebase.auth().signOut().then( () => {
      dispath({
        type: 'SIGNOUT_SUCCESS'
      });
    })
  }
}
export default signOut;