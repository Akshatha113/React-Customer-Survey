/*
 src/actions/simpleAction.js
*/
export const addSurveyAction = (data) => dispatch => {
    dispatch({
     type: 'ADD_SURVEY',
     payload: data
    })
   }