import { gConstants } from '../_components/constants'

const getAssetsOverview = (user) => {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' ,
                   'x-api-key' : user.ApiKey}
    };

    return fetch(gConstants.API_ROOT + '/asset/getAsset?userID=' + user.UserID, requestOptions)
        .then(response => {
            return Promise.all([response, response.json()])
        })
        .then( ([resRaw, resJSON]) => {
            if (!resRaw.ok)
            {
                return Promise.reject(resJSON.message);
            }
            return resJSON;
        })
        .then(assetData => {
            localStorage.setItem('assets', JSON.stringify(assetData));
            return assetData;
        });
}

const addAsset = (user, displayname) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'x-api-key' : user.ApiKey },
        body: JSON.stringify({
            'UserID': user.UserID,
            'DisplayName': displayname
        })
    };

    return fetch(gConstants.API_ROOT + '/asset/addAsset', requestOptions)
    .then(response => {
        return Promise.all([response, response.json()])
    })
    .then( ([resRaw, resJSON]) => {
        if (!resRaw.ok)
        {
            return Promise.reject(resJSON.message);
        }
        return resJSON;
    })
    .then(assetData => {
        return assetData;
    });
}


export const dataServices = {
    getAssetsOverview,
    addAsset
};