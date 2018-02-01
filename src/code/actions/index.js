// export const select = (car) => {
//   // alert("Now car is:"+ car.car);
//   return {
//     type: "CAR_SELECTED",
//     payload: car
//   }
// };
import * as types from '../constants/ActionTypes'

export const addCar = (text) => ({ type: types.ADD_CAR, text })
export const deleteCar = id => ({ type: types.DELETE_CAR, id })
