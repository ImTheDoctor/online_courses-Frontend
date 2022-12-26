const initialState = {
    teachers: [],
};
const teachers = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_DATA_TEACHERS":
            return { ...state, teachers: payload };
        default:
            return state;
    }
}

export default teachers;