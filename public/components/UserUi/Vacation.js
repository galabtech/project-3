import React, { Component } from 'react';
import { connect } from "react-redux";
import { DeletePost, Followers, Unfollow, getVacations } from '../../state/actions';
import ModalEdit from '../AdminUi/ModalEdit';
import io from 'socket.io-client';
import '../../App.css';

const socket = io('http://localhost:8888');


class Vacation extends Component {

    state = {
        buttonClick: false
    }
    componentDidMount() {
        debugger;
        socket.on('vacationsChange', (msg) => {
            this.props.dispatchVacaion(getVacations());
        })
    }
    render() {
        if (this.props.role === "Admin") {
            return (
                <div className="vacations">
                    <div className="card card-image" style={{ backgroundImage: `url(${this.props.v.image})` }}>
                        <div className="overlay">
                            <div>
                                <span className="fa fa-times top-right" onClick={this.deleteVacation.bind(this)}></span><br />
                                <ModalEdit forModal={this.props.v} />
                            </div>
                            <div className="text-white pt-3 pb-3 px-4">
                                <div>
                                    <h3 className="card-title pt-1 text-center"><strong>{this.props.v.destination}</strong></h3>
                                    <p className="text-center">{this.props.v.startdate}
                                        <br />
                                        {this.props.v.enddate}</p>
                                    <p className="text-left">{this.props.v.details}</p>
                                    <p className="price text-center">{this.props.v.price}<i className="fa fa-usd"></i></p>
                                    <p>{this.props.v.followers} <i className="fa fa-eye"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }

        else {
            return (
                <div className="vacations">
                    <div className="card card-image" style={{ backgroundImage: `url(${this.props.v.image})` }}>
                        <div className="overlay">
                            <div className="text-white pt-3 pb-3 px-4">
                                <h3 className="card-title pt-1 text-center"><strong>{this.props.v.destination}</strong></h3>
                                <p className="text-center">{this.props.v.startdate}
                                    <br />{this.props.v.enddate}</p>
                                <p className="text-left">{this.props.v.details}</p>
                                <p className="price text-center">{this.props.v.price}<i className="fa fa-usd"></i></p>
                                <button className="btn" id="followBtn" onClick={this.follow.bind(this)}>{this.state.buttonClick ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </div>
                    </div>
                </div >
            );
        }
    }

    follow() {
        this.setState(function (prevState) {
            return { buttonClick: !prevState.buttonClick };
        });

        if (!this.state.buttonClick) {
            this.props.dispatchVacaion(Followers(this.props.v.id));
        }
        else {
            this.props.dispatchVacaion(Unfollow(this.props.v.id));
        }
    }

    deleteVacation() {
        this.props.dispatchVacaion(DeletePost(this.props.v.id));
    }
}

const mapStateToProps = (state) => {
    return { msg: state.msg };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchVacaion: (data) => {
            dispatch(data);
        }
    }
}

const vacation = connect(mapStateToProps, mapDispatchToProps)(Vacation);
export default vacation;