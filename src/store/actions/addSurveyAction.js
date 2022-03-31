/*
 src/actions/simpleAction.js
*/
export const addSurveyAction = (data) => {
    return {
     type: 'ADD_SURVEY',
     payload: data
    }
   }