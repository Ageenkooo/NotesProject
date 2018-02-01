// export default function (state = null, action) {
//   switch (action.type) {
//     case "CAR_SELECTED":
//       return action.payload;
//       break;
//     default:
//       return state;
//   }
// }
import { ADD_CAR, DELETE_CAR } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'first car',
    id: 0
  }
]

export default function cars(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR:
      return [
        ...state,
        {
          id: state.reduce((maxId, car) => Math.max(car.id, maxId), -1) + 1,
          text: action.text
        }
      ]

    case DELETE_CAR:
      return state.filter(car =>
        car.id !== action.id
      )

    default:
      return state
  }
}
