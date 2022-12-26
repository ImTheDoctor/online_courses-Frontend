const initialState = {
    courses: [],
};
const courses = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_DATA_COURSE":
            return { ...state, courses: payload };
        default:
            return state;
    }
}

export default courses;