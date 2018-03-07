import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dataActions } from '../_actions/dataAction'
import './asset.css'
import Loader from '../_components/loader'
import SideNav from '../_components/sideNav'
import HeaderNav from '../_components/headerNav'

class AssetOverview extends React.Component {
  constructor(props) {
    super(props);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.assets = JSON.parse(localStorage.getItem('assets'));

    this.state = {
        AssetID : props.match.params.assetID,
        CurrentAsset : this.assets.Items.filter(item => item.AssetID === props.match.params.assetID)[0]
    }
  }

  OnClickParameter(){
    ReactDOM.findDOMNode(this).innerHTML = this.props.html;
  }

  createMarkup() {
    return {__html: '123123123'};
  }

  render() {
    //const { assets } = this.state;
    const { AssetID } = this.state;
    if (!this.user)
    {
      return (<Redirect to='/login' />);
    }
    else{
      return (
        <div className="mt-5" >
          <p>Overview</p>
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
