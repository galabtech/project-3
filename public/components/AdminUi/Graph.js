import React, { Component } from 'react';
import { connect } from "react-redux";
import io from 'socket.io-client';
import '../../App.css';
import { getVacations } from '../../state/actions';
var Chart = require('chart.js');
const socket = io('http://localhost:8888');

class Graph extends Component {

    componentDidMount() {
        this.createChart();
        socket.on('vacationsChange', (msg)=> {
            this.props.loadVacations(getVacations());
        })
    }

    createChart() {
        let vacationfollowers = this.props.vacations.filter(v => v.followers !== 0);
        let labelsArry = [];
        let followers = [];
        for (let i = 0; i < vacationfollowers.length; i++) {
            labelsArry.push(`${vacationfollowers[i].destination}`);
            followers.push(vacationfollowers[i].followers);
        }
        var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labelsArry,
                datasets: [{
                    label: 'Followers',
                    data: followers,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <canvas id="myChart"></canvas>
            </React.Fragment>
        );
    }
}

let mapStateToProps = function (state) {
    return { vacations: state.vacations };
}

const mapDispatchToProps = dispatch => {
    return {
        loadVacations: (data) => {
            return dispatch(data);
        }
    }
};



const graph = connect(mapStateToProps, mapDispatchToProps)(Graph);

export default graph;
