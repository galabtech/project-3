import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from '../Footer';
import Vacation from './Vacation'
import Navbar from '../Navbar';
import io from 'socket.io-client';
import '../../App.css';
import { getVacations } from '../../state/actions';
const socket = io('http://localhost:8888');




class UserInterface extends Component {
    state = {
        followers: '',
        favorite: []
    }
componentDidMount(){
socket.on('vacationsChange', (msg)=> {
    this.props.loadVacations(getVacations());
})
}
    render() {
        return (
            <React.Fragment>
                <Navbar  name={this.props.firstname} role={this.props.role}/>
                <div className="UserInterface">
                    <div className="col-xl-8 col-lg-11 col-md-11 col-sm-1 mx-auto mt-lg-5">
                        <div className="container text-center">
                       
                        </div>
                        {this.props.vacations.map(v => <Vacation key={v.id} v={v} />)}
                    </div>
                </div>
               
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { vacations: state.vacations, firstname: state.firstname, role: state.role };
    
};

const mapDispatchToProps = dispatch => {
    return {
        loadVacations: (data) => {
            return dispatch(data);
        }
    }
};

const userInterface = connect(mapStateToProps, mapDispatchToProps)(UserInterface);
export default userInterface;
