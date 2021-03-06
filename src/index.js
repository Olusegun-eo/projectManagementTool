import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import { ReactReduxFirebaseProvider /*,getFirebase,->not needed again*/} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";


// react-redux-firebase config[You can as well discard this; For now, i don't know the usage]
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, attachAuthIsReady: true
}


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({
      // getFirebase,
      getFirestore
    })),
    reduxFirestore(rrfConfig, firebase)
    //OR reduxFirestore(firebase)
  )
    );

const rrfProps = {
  firebase,
  config: fbConfig, /*here we can use fbConfig instead of rrfConfig*/
  dispatch: store.dispatch,
  createFirestoreInstance
}

// store.firebaseAuthIsReady.then(() => {})

ReactDOM.render(
  <Provider store={store}>    
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







//Sync Firestore--->to -->State-->using firestoreReducer
//Sync AuthStatus--->to -->store State-->using firebaseReducer
//*#61# --->forwarded-->##002#