import React, { Component } from 'react';
import { connect } from "react-redux";
import Vacation from '../UserUi/Vacation';
import '../../App.css';
class AdminVac extends Component {

    render() {
        return (
            <div>
                {this.props.vacations.map(v => <Vacation key={v.id} v={v} role={this.props.role} />)}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { vacations: state.vacations, role: state.role };
};

const mapDispatchToProps = dispatch => {
    return {
        loadVacations: () => {
            return dispatch();
        }
    }
};

const adminVac = connect(mapStateToProps, mapDispatchToProps)(AdminVac);
export default adminVac;
