import { gConstants } from '../_components/constants';
import { dataServices } from '../_services/dataServices';
import { alertActions } from './alertAction';

const addAsset = (user, displayname) => {
    return dispatch => {
        dispatch(request());
        dataServices.addAsset(user, displayname)
            .then(
                info => {
                    dispatch(getAssetsOverview(user));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    }

    function request() { return { type: gConstants.ADD_DATA_REQEUST } }
    function success(msg) { return { type: gConstants.ADD_DATA_SUCCESS, msg } }
    function failure(error) { return { type: gConstants.ADD_DATA_FAILURE, error } }
}

const getAssetsOverview = (user) => {
    return dispatch => {
        dispatch(request());
        dataServices.getAssetsOverview(user)
            .then(
                assets => {
                    dispatch(success(assets));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    /*     dispatch(request({ username }));

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
            );*/
    };

    function request() { return { type: gConstants.GET_DATA_REQUEST } }
    function success(data) { return { type: gConstants.GET_DATA_SUCCESS, data } }
    function failure(error) { return { type: gConstants.GET_DATA_FAILURE, error } }
}

export const dataActions = {
    getAssetsOverview,
    addAsset
};