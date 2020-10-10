export const createProject = (project) => {
  return (dispatch, getState, {/*getFirebase,->not needed again*/getFirestore}) => {
      //make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Fearless',
        authorId: 14142,
        createdAt: new Date()
      }).then( () => {
        dispatch({type: 'CREATE_PROJECT', project})
      }).catch( (err)=> {
        dispatch({type: 'CREATE_PROJECT_ERROR', err});
      })
  }
}
export default createProject; 