/*
 src/reducers/addSurveyReducer.js
*/
export default (state = {}, action) => {
    switch (action.type) {
     case 'ADD_SURVEY':
      return  action.payload
     default:
      return state
    }
   }