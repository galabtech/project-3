export const LoginRequest = (val) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        let data = await res.json();
        dispatch({
            type: "LOGIN",
            data: data
        })
    }
}

export const LogOut = () => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/logout')
        let data = await res.json();
        dispatch({
            type: "LOGOUT",
            data: data
        })
    };
}

export const RegisterRequest = (val) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        let data = await res.json();
        dispatch({
            type: "REGISTER",
            data: data
        })
    }
}

export const DeletePost = (val) => {
    return async (dispatch) => {
        let res = await fetch(`http://localhost:3000/delete?id=+${val}`)
        let data = await res.json();
        dispatch({
            type: "DELETE",
            data: data
        })
    }
}

export const AddVacation = (val) => {
    debugger
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/addvacation', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        debugger;
        let data = await res.json();
        debugger;
        dispatch({
            type: "ADD",
            data: data
        })
    }
}

export const Followers = (val) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/follow', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ val })
        });
        let data = await res.json();
        dispatch({
            type: "FOLLOW",
            data: data
        })
    }
}

export const Unfollow = (val) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/unfollow', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ val })
        });
        let data = await res.json();
        dispatch({
            type: "UNFOLLOW",
            data: data
        })
    }
}

export const EditVacation = (val) => {
    return async (dispatch) => {
        let res = await fetch(`http://localhost:3000/edit`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        let data = await res.json();
        dispatch({
            type: "EDIT",
            data: data
        })
    }
}

export const ChartGraph = (createChart = null) => {
    return async function (dispatch) {
        let res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        dispatch({
            type: "CHART",
            data: data
        });

        if (createChart != null) {
            createChart();
        }
    };
}

export const getVacations = () => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/vacations');
        let data = await res.json();
        dispatch({
            type: "VACATIONS_CHANGE",
            data: data
        }) 
  };
}

