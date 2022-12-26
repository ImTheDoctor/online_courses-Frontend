import { takeEvery, put, call} from "@redux-saga/core/effects"
import { getApiCourse, getApiTeachers } from '../../api/fetchData'
import { setDataCourseAction, setDataTeacherAction } from "../actions/dataActions";

export function* getDataCourse() {
    const data = yield call(getApiCourse);
    yield put(setDataCourseAction(data)); 
}

export function* getDataTeachers() {
    const data = yield call(getApiTeachers);
    yield put(setDataTeacherAction(data)); 
}


export function* watchData() {
    yield takeEvery("GET_DATA_COURSE", getDataCourse);
    yield takeEvery("GET_DATA_TEACHERS", getDataTeachers);
}

export default function* rootSaga() {
    yield watchData();
}