

import { gConstants } from '../_components/constants'


const getAllDevices = (user, assetid) => {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' ,
                   'x-api-key' : user.ApiKey}
    };

    return fetch(gConstants.API_ROOT + '/device/getDeviceByAsset?AssetID=' + assetid, requestOptions)
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
        .then(deviceData => {
            return deviceData;
        });
}

const addNewDevice = (user, assetid, devicedata) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'x-api-key' : user.ApiKey },
        body: JSON.stringify(Object.assign({
            'AssetID': assetid
        },devicedata))
    };

    console.log("Reqeust: ");
    console.log(requestOptions);

    return fetch(gConstants.API_ROOT + '/device/addDevice', requestOptions)
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

const deleteDevice = (assetid, deviceid) => {

    const requestOptions = {
        method: 'DELETE'
    };

    return fetch(gConstants.API_ROOT + '/device/deleteDevice?DeviceID=' + deviceid + '&AssetID=' + assetid, requestOptions)
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
    .then(info => {
        return info;
    });
}

export const deviceServices = {
    addNewDevice,
    deleteDevice,
    getAllDevices
};