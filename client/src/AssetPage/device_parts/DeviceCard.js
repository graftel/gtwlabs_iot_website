import React from 'react';

export const DeviceCard = ({ device }) => {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: 220}}>
        <a><div className="card-header">{device.DeviceName}</div></a>
        <div className="card-body text-primary">
            <ul>
            {device.Variables.map((item,i) => 
                <li key={i}>{item}</li>
            )}
            </ul>
        </div>
        </div>
    );
}