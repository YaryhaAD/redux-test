import{ ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index'

//DEFAUL ACTIONS
// const actionChangeFirstName = {
//   type: ACTION_CHANGE_FIRST_NAME,
//   payload: null
// }

// const actionChangeSecondName = {
//   type: ACTION_CHANGE_SECOND_NAME,
//   payload: null
// }

//ACTION CREATORS -> functions that returns an object
export const changeFirstName = (newFirstName) => ({
  type: ACTION_CHANGE_FIRST_NAME,
  payload: newFirstName 
}) 

export const changeSecondName = (newSecondName) => ({
  type: ACTION_CHANGE_SECOND_NAME,
  payload: newSecondName 
}) 