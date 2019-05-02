import React, { Component } from 'react';
import { connect } from "react-redux";
import { AddVacation, getVacations } from '../../state/actions';
import io from 'socket.io-client';
import '../../App.css';
import Footer from '../Footer';
const socket = io('http://localhost:8888');

class Add extends Component {
    state = {
        details: '',
        destination: '',
        image: '',
        startdate: '',
        enddate: '',
        price: ''
    }

    componentDidMount() {
        socket.on('vacationChange', (msg) => {
            this.props.loadVacations(getVacations());
        })
    }

    render() {
        return (
            <div className="Add">
              
                    <input onChange={this.handleChange.bind(this)} name="details" placeholder="Description"  />
           <br/>
                    <input onChange={this.handleChange.bind(this)} name="destination" placeholder="destination"/>
                    <br/>
                    <input type="file" onChange={this.handleChange.bind(this)} name="image" />
                    <br/>
              
                    <input onChange={this.handleChange.bind(this)} name="startdate" type="date"  />
               
             
                    <input onChange={this.handleChange.bind(this)} name="enddate" type="date"  />
              
               
                   <input onChange={this.handleChange.bind(this)} name="price" type="number" placeholder="Price in USD"  />
                   <br/>
                    <button className="btn " onClick={this.add.bind(this)}>Add Vacation</button>

                
            </div>
        );
    }
    handleChange(ev) {
        if (ev.target.name == "image") {
            let file = ev.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result);
                this.setState({ image: reader.result });
            }
        }
        this.setState({ [ev.target.name]: ev.target.value })
    }

    add() {
        this.props.addVacation(this.state);
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addVacation: (state) => {
            return dispatch(AddVacation(state));
        }
    };
};

const add = connect(null, mapDispatchToProps)(Add)

export default add;
