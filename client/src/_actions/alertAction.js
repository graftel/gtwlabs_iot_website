import { gConstants } from '../_components/constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: gConstants.SUCCESS, message };
}

function error(message) {
    return { type: gConstants.ERROR, message };
}

function clear() {
    return { type: gConstants.CLEAR };
}