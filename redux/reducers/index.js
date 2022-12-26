import { combineReducers } from "redux";
import courses from './courses'
import teachers from './teachers'

const reducer = combineReducers({
    courses,
    teachers
})

export default reducer