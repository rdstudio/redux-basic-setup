import { UPDATE_USER, FETCH_USERS } from './usersActionTypes'

//synch action
export const updateUser = (user_id) => {
    return {
        type: UPDATE_USER,
        payload: user_id
    }
};

//async action
export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`${URL}/users`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: FETCH_USERS,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
};