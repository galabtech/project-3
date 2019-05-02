import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditVacation, getVacations } from '../../state/actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import io from 'socket.io-client';
import Footer from '../Footer';
import '../../App.css';
const socket = io('http://localhost:8888');

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      id: this.props.forModal.id,
      destination: '',
      startdate: '',
      enddate: '',
      price: '',
      details: ''
    };
  }

  componentDidMount() {
    socket.on('vacationsChange', (msg) => {
      this.props.editVacation(getVacations());
    })
  }

  render() {
    return (
      <div className="modalEdit">
        <span className="fa fa-edit top-right" onClick={this.toggle.bind(this)}>Edit</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
          <ModalHeader toggle={this.toggle.bind(this)}>Edit This Vacation</ModalHeader>
          <ModalBody>
            <div className="vacations">
              <div className="card card-image" style={{ backgroundImage: `url(${this.props.forModal.image})` }}>
                <div className="overlay">
                  <div className="col-3 text-white pt-3 pb-3 px-4">
                    <div >
                    Destination:<input onChange={this.handleChange.bind(this)} name="destination"  placeholder={this.props.forModal.destination} />
                    Start Date:<input onChange={this.handleChange.bind(this)} name="startdate" placeholder={this.props.forModal.startdate} />
                      <br />End Date:<input className="text-center" onChange={this.handleChange.bind(this)} name="enddate" placeholder={this.props.forModal.enddate} />
                      Details:<input  onChange={this.handleChange.bind(this)} name="details" placeholder={this.props.forModal.details} />
                      Price:<input  onChange={this.handleChange.bind(this)} name="price" type="number" placeholder={this.props.forModal.price} /><i className="fa fa-usd"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveVacation.bind(this)}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  saveVacation() {
    this.props.editVacation(EditVacation(this.state))
    this.toggle();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editVacation: (data) => {
      dispatch(data);
    }
  }
}

const modalEdit = connect(null, mapDispatchToProps)(ModalEdit)
export default modalEdit;

