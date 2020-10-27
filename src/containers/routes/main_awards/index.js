import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import AwardCard from 'components/award_card'
import TinyChart from 'components/tiny_line_chart'
import './index.scss'

import { 
    Line, 
    Doughnut, 
    Pie,
} from "react-chartjs-2";
import "chartjs-plugin-labels";

import $ from "jquery";

const awardWonData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Past Year",
      data: [50, 53, 65, 59, 54, 65, 70, 63, 60, 56, 45, 56],
      lineTension: 0,
      fill: true,
      backgroundColor: "rgba(58,158,253,0.2)",
      borderColor: "#3A96FD",
      pointBorderWidth: 1,
      pointBorderColor: '#3A96FD',
      pointHoverRadius: 5,

      pointStyle: 'circle',
      pointBackgroundColor: '#fff',

      // pointRadius: 3,
      // pointHitRadius: 10,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // borderJoinStyle: 'miter',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
     
    },
    {
      label: "Present Year",
      data: [45, 43, 45, 46, 44, 55, 60, 56, 50, 49, 36, 42],
      lineTension: 0,
      fill: true,
      backgroundColor: "rgba(157,96,251,0.2)",
      borderColor: "#9D60FB",
      pointBackgroundColor: '#fff',
    }
  ]
};

const awardsWonChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  
    legend: {
        position: 'top',
        display: false,
        labels: {
          usePointStyle: true,
          fontColor: "#67758D",
          padding: 50,
       },
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
        }],
        yAxes: [
        {
            gridLines: {
                color: "rgba(128, 151, 177, 0.5)",
                lineWidth: 1
            },   
            ticks: {
                display: false,
                fontColor: "#97A4BA",
                fontSize: 12
            }
        }],
    },
};

const doughnutData = {
    labels: ["Purple", "Yellow", "Red", "Pink", "Blue"],
    datasets: [
      {
        data: [100, 100, 60, 40, 100],
        backgroundColor: ["#8479FF", "#FFC935", "#FF6161", "#BF5BFF", "#58D0FF"],
        borderColor: "#12131F",
        borderWidth: 5,
        hoverBackgroundColor: ["#8479FF", "#FFC935", "#FF6161", "#BF5BFF", "#58D0FF"],
      }
    ]
}

const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        labels: {
            render: 'label',
            fontColor: function (data) {
                return data.dataset.backgroundColor[data.index];
            },
            position: 'outside',
            fontSize: 12,
            textMargin: 5
          }
    }
}

const pieData = {
    labels: ['white'],
    datasets: [
      {
        backgroundColor: "#fff",
        hoverBackgroundColor: '#fff',
        hoverBorderColor: '#fff',
        data: [100]
      }
    ]
  };

const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    tooltips: {
        enabled: false
   },
    plugins: {
        labels: {
            render: '',
            fontColor: 'transparent'
        }
    }
}

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueDropDownOpen: false,
            protectorDropDownOpen: false,
            
        }
    }

    componentDidMount() {
        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[3].classList.add("active");


        $(".dropdown").click(function(){
            $(this).next(".menu").toggleClass("showSelectMenu");

            $(".menu > li").click(function(){
                $(this).closest(".select-dropholder").children(".dropdown").find("p").html($(this).html());
                $(".menu").removeClass("showSelectMenu");
            });
        });
    }

    render() {
        
        return (
            <div id="dashboard-main-awards">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        <div className="content">
                            <p className="page-title">Awards</p>

                            <div className="select-group">
                                <div className="select-dropholder">
                                    <div className="dropdown">
                                        <p>Select League</p>
                                    </div>
                                    <ul className="menu">
                                        <li>League 1</li>
                                        <li>League 2</li>
                                        <li>League 3</li>
                                        <li>League 4</li>
                                        <li>League 5</li>
                                    </ul>
                                </div>

                                <div className="select-dropholder">
                                    <div className="dropdown">
                                        <p>Select protector</p>
                                    </div>
                                    <ul className="menu">
                                        <li>protector 1</li>
                                        <li>protector 2</li>
                                        <li>protector 3</li>
                                        <li>protector 4</li>
                                        <li>protector 5</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="result-group">
                                <div className="card">
                                    <p className="card-title">
                                        Tournaments attended
                                    </p>
                                    <p className="card-body">5</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">
                                        Tournaments won
                                    </p>
                                    <p className="card-body">2</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">
                                        Awards won
                                    </p>
                                    <p className="card-body">10</p>
                                </div>
                            </div>

                            <div className="main-body">
                                <div className="line-chart-area">

                                    <div className="awards-won-chart">
                                        <div className="chart-header">
                                            <p className="title">
                                                Awards won
                                            </p>
                                            <div className="chart-labels">
                                                <p>Past Year</p>
                                                <p>Present Year</p>
                                            </div>
                                            <button className="more-btn">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                        <Line data={awardWonData} options={awardsWonChartOptions} />
                                    </div>

                                    <div className="award-body">
                                        <p className="title">Awards</p>
                                        <div className="award-items">
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                        </div>
                                    </div>
                                </div>

                                <div className="rate-progress-area">
                                    <div className="rate-area">
                                        <div className="area-header">
                                            <p className="title">
                                                Types of awards won
                                            </p>
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
                                        <div className="result-value">
                                            <div>
                                                <p className="big-text">
                                                    87%
                                                </p>
                                                <p className="small-text">
                                                    Success Rate
                                                </p>
                                            </div>
                                            <div>
                                                <p className="big-text">
                                                    2
                                                </p>
                                                <p className="small-text">
                                                    Awards
                                                </p>
                                            </div>
                                        </div>
                                        <div className="star-rate">
                                            <div className="doughnut-container">
                                                <Doughnut data={doughnutData} options={doughnutOptions} />
                                                <div className="pie-container">
                                                    <Pie
                                                        data={pieData}
                                                        options={pieOptions}
                                                    />
                                                </div>
                                            </div>
                                            <div className="star-container">
                                                <div className="item">
                                                    <i className="fa fa-star"></i>
                                                    <span>5/30</span>
                                                </div>
                                                <div className="item">
                                                    <i className="fa fa-star"></i>
                                                    <span>5/30</span>
                                                </div>
                                                <div className="item">
                                                    <i className="fa fa-star"></i>
                                                    <span>5/30</span>
                                                </div>
                                                <div className="item">
                                                    <i className="fa fa-star"></i>
                                                    <span>5/30</span>
                                                </div>
                                                <div className="item">
                                                    <i className="fa fa-star"></i>
                                                    <span>5/30</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress-area">
                                        <div className="header">
                                            <p className="title">
                                                Progress per protector
                                            </p>
                                            <div className="progress-select-group">
                                                <div className="select-dropholder">
                                                    <div className="dropdown">
                                                        <p>Protector</p>
                                                    </div>
                                                    <ul className="menu">
                                                        <li>Protector 1</li>
                                                        <li>Protector 2</li>
                                                        <li>Protector 3</li>
                                                    </ul>
                                                </div>
                                                <div className="select-dropholder">
                                                    <div className="dropdown">
                                                        <p>League</p>
                                                    </div>
                                                    <ul className="menu">
                                                        <li>League 1</li>
                                                        <li>League 2</li>
                                                        <li>League 3</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="last-update">
                                            Last update: 10:13 am
                                        </p>
                                        <div className="progress-chart-area">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>League</td>
                                                        <td>lorem</td>
                                                        <td>
                                                            <TinyChart 
                                                                data={ [40, 30, 50, 30, 50]}
                                                                borderColor={'#AAFFBE'}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span style={{color: '#56DB15'}}>+7 Fortunas</span>
                                                            <div className="rounded-icon" style={{background: '#56DB15'}}>
                                                                <i className="fa fa-arrow-up"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>League</td>
                                                        <td>lorem</td>
                                                        <td>
                                                            <TinyChart 
                                                                data={ [25, 30, 50, 30, 40]}
                                                                borderColor={'#AAFFBE'}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span style={{color: '#56DB15'}}>+7 Fortunas</span>
                                                            <div className="rounded-icon" style={{background: '#56DB15'}}>
                                                                <i className="fa fa-arrow-up"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>League</td>
                                                        <td>lorem</td>
                                                        <td>
                                                            <TinyChart 
                                                                data={ [50, 30, 50, 30, 45]}
                                                                borderColor={'#AAFFBE'}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span style={{color: '#56DB15'}}>+7 Fortunas</span>
                                                            <div className="rounded-icon" style={{background: '#56DB15'}}>
                                                                <i className="fa fa-arrow-up"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Practise</td>
                                                        <td>Nuwa</td>
                                                        <td>
                                                            <TinyChart 
                                                                data={ [40, 30, 40, 30, 40]}
                                                                borderColor={'#CD0000'}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span style={{color: '#CD0000'}}>+1 Fortunas</span>
                                                            <div className="rounded-icon" style={{background: '#CD0000'}}>
                                                                <i className="fa fa-arrow-down"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Practise</td>
                                                        <td>Nuwa</td>
                                                        <td>
                                                            <TinyChart 
                                                                data={ [25, 37, 40, 26, 36]}
                                                                borderColor={'#CD0000'}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span style={{color: '#CD0000'}}>+1 Fortunas</span>
                                                            <div className="rounded-icon" style={{background: '#CD0000'}}>
                                                                <i className="fa fa-arrow-down"></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(index)
