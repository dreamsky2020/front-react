import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import './index.scss'

const options = {
  responsive: true,
  maintainAspectRatio: true,

  legend: {
    position: "bottom",
    display: false,
    labels: {
      usePointStyle: true,
      fontColor: "#67758D",
      padding: 20,
      pointBackgroundColor: "#ff0000"
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(128, 151, 177, 0.5)",
          lineWidth: 1
        },
        ticks: {
          fontColor: "#97A4BA",
          fontSize: 12
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(128, 151, 177, 0.5)",
          lineWidth: 1
        },
        ticks: {
          fontColor: "#97A4BA",
          fontSize: 12,
          stepSize: Math.ceil(20),
          min: 0
        }
      }
    ]
  }
};

export default class BarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    var bar_ctx = document
      .getElementById("answerLineChartContainer")
      .querySelector(".chartjs-render-monitor")
      .getContext("2d");
    var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 250);
    background_1.addColorStop(0, `rgba(74, 174, 26, 1)`);
    background_1.addColorStop(0.8, `rgba(74, 174, 26, 0)`);
    background_1.addColorStop(1, `rgba(74, 174, 26, 0)`);

    var background_2 = bar_ctx.createLinearGradient(0, 0, 0, 350);
    background_2.addColorStop(0, `rgba(255, 0, 0, 1)`);
    background_2.addColorStop(0.5, `rgba(174, 24, 24, 0.5)`);
    background_2.addColorStop(1, `rgba(174, 24, 24, 0)`);

    const data = {
      labels: [
        "Jan 1",
        "Jan 8",
        "Jan 15",
        "Jan 22",
        "Feb 1",
        "Feb 8",
        "Feb 15",
        "Feb 22",
        "Mar 1",
        "Mar 8",
        "Mar 15",
        "Mar 22"
      ],
      datasets: [
        {
          label: "correct answer",
          data: [50, 53, 65, 59, 54, 65, 70, 63, 60, 56, 45, 56],
          lineTension: 0,
          backgroundColor: background_1,
          borderColor: "#56DB15",
          pointBorderWidth: 1,
          pointBorderColor: "#3A96FD",
          pointHoverRadius: 5,

          pointStyle: "circle",
          pointBackgroundColor: "#fff"
        },
        {
          label: "wrong answer",
          data: [12, 33, 27, 36, 27, 43, 45, 46, 50, 39, 36, 42],
          lineTension: 0,
          backgroundColor: background_2,
          borderColor: "#ff0000",
          pointBackgroundColor: "#fff"
        }
      ]
    };

    this.setState({ data: data });
  }

  render() {
    return (
      <div id="answerLineChartContainer">
        <div className="chart-header">
          <p className="chart-name">Answers</p>
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
        <Line
          className="chart"
          data={this.state.data}
          options={options}
          width={100} 
          height={40} 
        />
        <div className="chart-footer">
          <p>correct answer</p>
          <p>wrong answer</p>
        </div>
      </div>
    );
  }
}
