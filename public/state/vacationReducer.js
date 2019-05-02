const initialState = {
    vacations: [],
    isLogged: false,
    username: '',
    firstname: '',
    role: '',
    msg: ''

};

const vacationReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case "LOGIN":
            newState = Object.assign({}, state);
            newState.vacations = action.data.allVacations;
            newState.isLogged = action.data.isLogged;
            newState.username = action.data.username;
            newState.firstname = action.data.firstname;
            newState.role = action.data.role;
            newState.msg = action.data.msg;
            return newState;

        case "LOGOUT":
            newState = Object.assign({}, state);
            newState.isLogged = false;
            return newState;

        case "REGISTER":
            newState = Object.assign({}, state);
            newState.msg = action.data.msg;
            return newState;

        case "ADD":
        
            newState = Object.assign({}, state);
            newState.msg = action.data.msg; 
            newState.vacations = action.data.allVacations;
            
            return newState;

        case "EDIT":
            newState = Object.assign({}, state);
            newState.msg = action.data.msg;
            newState.vacations = action.data.allVacations;
            return newState;

        case "DELETE":
            newState = Object.assign({}, state);
            newState.msg = action.data.msg;
            newState.vacations = action.data.allVacations;
            return newState;

        case "FOLLOW":
            newState = Object.assign({}, state);
            newState.msg = action.data.msg;
            newState.vacations = action.data.allVacations;

            return newState;

        case "UNFOLLOW":
            newState = Object.assign({}, state);
            newState.msg = action.data.msg;
            newState.vacations = action.data.allVacations;
            return newState;

        case "CHART":
            newState = Object.assign({}, state);
            newState.vacations = action.data.allVacations;
            return newState;

        case "VACATIONS_CHANGE":
        debugger;
            newState = Object.assign({}, state);
            newState.vacations = action.data;
            return newState;

        default:
            return state;
    }
};
export default vacationReducer;   