import { takeEvery, put, call} from "@redux-saga/core/effects"
import { getApiCourse } from '../../api/fetchData'
import { setDataCourseAction } from "../actions/dataActions";

export function* getDataCourse() {
    const data = yield call(getApiCourse);
    yield put(setDataCourseAction(data)); 
}
// export function* deletePlayer(idx){
//     yield call(deleteData, idx);
//     yield put(setDataPlayer(idx));
//     yield call(handlePlayers);
// }

// export function* postPlayer(userData){
//     yield call(postData, userData);
//     yield put(setDataPlayer(userData));
//     yield call(handlePlayers);
// }

export function* watchData() {
    yield takeEvery("GET_DATA", getDataCourse);
}

export default function* rootSaga() {
    yield watchData();
}