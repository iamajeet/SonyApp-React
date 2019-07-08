const userReducer = (state = {

    name: "Ajeet",

    age: 27

}, action) => {

    switch (action.type) {

        case "SET_NAME":

            state = {

                ...state,

                name: action.payload

            };

            break;

        case "SET_AGE":

            state = {

                ...state,

                age: action.payload

            };

            break;
        default:
            break;

    }

    return state;

};



export default userReducer;