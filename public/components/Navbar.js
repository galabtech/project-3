import React, { Component } from 'react';
import { connect } from "react-redux";
import { LogOut } from '../state/actions'
import { Link } from 'react-router-dom';
import '../App.css';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        if (this.props.role === "Admin") {
            return (
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-light">
                    <div className="container">
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span id="name" >Hello {this.props.name}</span>
                        <div className={`${classOne}`} id="navbarResponsive">
                           
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Vacations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add" className="nav-link">Add New Vacation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/graph" className="nav-link">Reports</Link>
                                </li>
                                <Link>
                                    <span className="nav-link3" onClick={this.logoutBtn.bind(this)}><i className="fa fa-power-off"></i> Logout</span></Link>
                              
                           
                        </div>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top">
                    <div className="container">
                    <span class="navbar-brand" href="#">Hello {this.props.name}</span>
                        <ul className="navbar-nav mr-auto smooth-scroll">
                           
                            <li className="nav-item">
                                <Link><span className="nav-link" onClick={this.logoutBtn.bind(this)}><i className="fa fa-power-off"></i> Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

    logoutBtn() {
        this.props.logOut();

    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(LogOut());
        }
    }
}

const navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default navbar;
