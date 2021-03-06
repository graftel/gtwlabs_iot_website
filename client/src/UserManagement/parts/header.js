import React from 'react';


function PanelHeader(props) {
    return (
        <div class="panel-title">
            <h1 class="h3 mb-3 font-weight-normal">{props.title}</h1>
        </div>
    );
}

export default PanelHeader;