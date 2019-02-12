import React, { Component } from 'react';
import { connect } from 'react-redux';

import SnowboardCard from '../components/SnowboardCard';
import SnowboardForm from './SnowboardForm';
import { getSnowboards } from '../actions/snowboards';
import './Snowboards.css';

class Snowboards extends Component {

    componentDidMount() {
      this.props.getSnowboards()
    }

    render() {
        return (
          <div className="SnowboardsContainer">
            <h1>Snowboards</h1>
            {this.props.snowboards.map(snowboard => <SnowboardCard key={snowboard.id} snowboard={snowboard} />)}
            <SnowboardForm />
          </div>
        );
      }
    }

    const mapStateToProps = (state) => {
        return ({
          snowboards: state.snowboards
        })
      }
      
export default connect(mapStateToProps, { getSnowboards })(Snowboards);