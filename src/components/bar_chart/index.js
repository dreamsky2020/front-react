import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";
import './index.scss'
import "chartjs-plugin-labels";
require("./RoundedBars.js");


const options = {
  responsive: true,
  maintainAspectRatio: true,

  legend: {
    display: false,
  },
  plugins: {
      labels: {
          render: '',
          fontColor: 'transparent'
      }
  },
  cornerRadius: 20,
  scales: {
    xAxes: [
      {
        gridLines: {
            display: false,
        },

        categoryPercentage: 1.0,
        barPercentage: 0.5,
        ticks: {
          fontColor: "#97A4BA",
        }
      }
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
            color: "#D8D8D8",
            zeroLineColor: "#D8D8D8",
            lineWidth: 1,
            drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 4,
          stepSize: Math.ceil(20),
          min: 0,
          fontColor: "#97A4BA",
          // max: 100
        }
      }
    ]
  }
};


export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {}
        };
      }

      componentDidMount() {
        var bar_ctx =document.getElementById("barChartContainer").querySelector('.chartjs-render-monitor').getContext("2d");;
        var background = bar_ctx.createLinearGradient(0, 0, 0, 400);
        background.addColorStop(0, `rgba(112, 110, 204, 1)`);
        background.addColorStop(1, `rgba(112, 110, 204, 0)`);
    
        const data = {
          labels: ["January", "February", "March", "April", "May", "Jun", "July"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: background,
              borderColor: "transparent",
              borderWidth: 1,
              hoverBackgroundColor: background,
              data: [35, 59, 40, 61, 56, 55, 40],
            },
            {
              label: "My Second dataset",
              backgroundColor: background,
              borderColor: "transparent",
              borderWidth: 1,
              hoverBackgroundColor: background,
              data: [24, 44, 67, 30, 50, 42, 28]
            },
            {
              label: "My third dataset",
              backgroundColor: background,
              borderColor: "transparent",
              borderWidth: 1,
              hoverBackgroundColor: background,
              data: [24, 44, 67, 30, 50, 42, 28]
            }
          ]
        };
    
        this.setState({ data: data });

      }

    render() {
        return (
            <div id="barChartContainer">
              <div className="chart-header">
                <p className="chart-name">
                  Credit Points Gained
                </p>
                <div className="select-group">
                  <div className="select-dropholder">
                      <div className="dropdown">
                          <p>Overall Progress</p>
                      </div>
                      <ul className="menu">
                          <li>Progress 1</li>
                          <li>Progress 2</li>
                          <li>Progress 3</li>
                          <li>Progress 4</li>
                          <li>Progress 5</li>
                      </ul>
                  </div>

                  <div className="select-dropholder">
                      <div className="dropdown">
                          <p>2020</p>
                      </div>
                      <ul className="menu">
                          <li>2019</li>
                          <li>2018</li>
                          <li>2017</li>
                          <li>2016</li>
                          <li>2015</li>
                      </ul>
                  </div>
                </div>
              </div>
               <Bar 
                data={this.state.data} 
                width={100} 
                height={40} 
                options={options} 
               />
            </div>
        )
    }
}

export default index
