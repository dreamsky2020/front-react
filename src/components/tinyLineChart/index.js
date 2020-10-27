import React, { Component } from "react";
import { Line} from "react-chartjs-2";

const options = {
    responsive: true,
    maintainAspectRatio: true,
  
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
        {
          display: false,
          
        }],
        yAxes: [
          {
            display: false,
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 6,
                stepSize: Math.ceil(10),
                min: 20,
                max: 60,
              }
          }
        ],
    },
  
    elements: {
      point: {
          radius: 0,
      },
    },
};

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            
        }
    }

    componentDidMount() {
        var chart = document.getElementById('chart').getContext('2d');
        var gradient = chart.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, this.convertHexToRGBA(this.props.borderColor, 0.1));
        gradient.addColorStop(1, '#12131F');


        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: 'Service provided',
                    backgroundColor: gradient,
                    borderColor: this.props.borderColor,
                    borderWidth: 1,
                    data: this.props.data,
                }
            ],
        };
        this.setState({data: data});
    }

    convertHexToRGBA = (hex, opacity) => {
        const tempHex = hex.replace('#', '');
        const r = parseInt(tempHex.substring(0, 2), 16);
        const g = parseInt(tempHex.substring(2, 4), 16);
        const b = parseInt(tempHex.substring(4, 6), 16);
      
        return `rgba(${r},${g},${b},${opacity / 100})`;
    };

    render() {
        return (
            <div style={{width: '60px', height: '25px', display: 'inline-block'}}>
                <Line id="chart" data={this.state.data} options={options} />
            </div>
        )
    }
}

export default index
