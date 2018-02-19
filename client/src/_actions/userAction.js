import { gConstants } from '../_components/constants';
import { userService } from '../_services/userServices';
import { alertActions } from './alertAction';

export const userActions = {
    login
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: gConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: gConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: gConstants.LOGIN_FAILURE, error } }
}