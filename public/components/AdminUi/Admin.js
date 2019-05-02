import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Navbar from '../Navbar';
import '../../App.css';
import AdminVac from '../AdminUi/AdminVac';
import Add from './Add';
import Graph from './Graph';




class Admin extends Component {


    render() {
        return (
            <React.Fragment>
            <Navbar id="name" name={this.props.firstname} role={this.props.role} />
            
            <div className="admin">
              <div className="col-xl-8 col-lg-11 col-md-11 col-sm-1 mx-auto mt-lg-5">
                <div className="container text-center">
                
                </div>

                <Route exact path="/" component={AdminVac} />
                <Route path="/add" component={Add} />
                <Route path="/graph" component={Graph} />
              </div>
            </div>
           
          </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return { vacations: state.vacations, firstname: state.firstname, role: state.role };
};

const mapDispatchToProps = dispatch => {
    return {
        loadVacations: () => {
            return dispatch();
        }
    }
};

const admin = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default admin;
