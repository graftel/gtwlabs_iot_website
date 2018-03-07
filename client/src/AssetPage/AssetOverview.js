import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dataActions } from '../_actions/dataAction'
import './asset.css'
import Loader from '../_components/loader'
import SideNav from '../_components/sideNav'
import HeaderNav from '../_components/headerNav'
import { Samy, SvgProxy } from 'react-samy-svg'
import svgcontents from 'raw-loader!./svg/HeatExchanger.svg'

class AssetOverview extends React.Component {
  constructor(props) {
    super(props);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.assets = JSON.parse(localStorage.getItem('assets'));

    this.state = {
        AssetID : props.match.params.assetID,
        CurrentAsset : this.assets.Items.filter(item => item.AssetID === props.match.params.assetID)[0],
        ShellInlet: '94.4 F',
        ShellOutlet: '95.5 F'
    }
  }

  OnClickParameter(){
    ReactDOM.findDOMNode(this).innerHTML = this.props.html;
  }

  render() {
    //const { assets } = this.state;
    const { AssetID, ShellInlet, ShellOutlet } = this.state;
    if (!this.user)
    {
      return (<Redirect to='/login' />);
    }
    else{
      return (
        <div className="mt-5" >
          <p>Overview123</p>
          <Samy svgXML={svgcontents} >
            <SvgProxy selector="#Star" fill="red"/>
          </Samy>
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

const connectedPage = connect(mapStateToProps)(AssetOverview);
export { connectedPage as AssetOverview };
