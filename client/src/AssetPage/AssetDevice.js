import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dataActions } from '../_actions/dataAction'
import './asset.css'
import Loader from '../_components/loader'
import SideNav from '../_components/sideNav'
import HeaderNav from '../_components/headerNav'
import { DeviceCard } from './device_parts/DeviceCard'

class AssetDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        AssetID : props.match.params.assetID,
        Devices: [{
          DeviceID: "11111",
          DeviceName: "Device1",
          SerialNumber: "02A002",
          Variables: ["Temp", "Hum"]
        },
        {
          DeviceName: "Device2",
          Variables: ["Temp", "Hum","Test"]
        },
        {
          DeviceName: "Device3",
          Variables: ["Temp", "Hum","Test"]
        }
        ]
    }

    this.user = JSON.parse(localStorage.getItem('user'));
    this.assets = JSON.parse(localStorage.getItem('assets'));
    // data will update every 1 minute on this page
    

  }

  render() {
    //const { assets } = this.state;
    const { AssetID, Devices } = this.state;
    console.log(Devices);
    if (!this.user)
    {
      return (<Redirect to='/login' />);
    }
    else{
      return (
          <div className="mt-3" >
            {Devices.map((item,i) => 
              <DeviceCard key={i} device={item} />
            )}
          </div>
      );
    }

  }
}

function mapStateToProps(state) {
  const { data, msg } = state.data
  return {
      assets : data,
      msg: msg
  };
}

const connectedPage = connect(mapStateToProps)(AssetDevice);
export { connectedPage as AssetDevice };
