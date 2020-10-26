import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import RightCard from 'components/record_card'
import AwardCard from 'components/award_card'
import RankTable from 'components/rank_table'
import Footer from 'components/dashboard_footer'

import './index.scss'


export class index extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            recordsOpen: true,
            awardsOpen: false,
            ranksOpen: false,

            selectDropDownOpen: false,
        }

        this.changeTabs = this.changeTabs.bind(this);
        this.selectClick = this.selectClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    changeTabs(tab) {
        this.setState({
            recordsOpen: false,
            awardsOpen: false,
            ranksOpen: false
        });

        this.setState({[tab]: true})
    }

    selectClick() {
        if (!this.state.selectDropDownOpen) {
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
            selectDropDownOpen: !prevState.selectDropDownOpen,
        }));
      }
      
    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.selectClick();
    }


    render() {
        const { recordsOpen, awardsOpen, ranksOpen } = this.state;

        return (
            <div>
                <div className="route-wrapper" id="dashboard-records">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        
                        <div className="content">
                            <div className="analysis-section">
                                <div className="left-section">
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/telegram-username.png" alt="telegram user" />
                                        </div>
                                        <div className="right">
                                            <p className="title">Telegram Username</p>
                                            <p className="small-text">Jhon Doe</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/calendar.png" alt="calendar" />
                                        </div>
                                        <div className="right">
                                            <p className="title">Date of Joining Ra</p>
                                            <p className="small-text">20 Auguest 2019</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/telegram-id.png" alt="telegram id" />
                                        </div>
                                        <div className="right">
                                            <p className="title">Telegram ID Number</p>
                                            <p className="small-text">#4665748jh</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/edit.png" alt="edit" />
                                        </div>
                                        <div className="right">
                                            <p className="title">Edit Your Profile</p>
                                            <Link to="/" className="small-text">Edit</Link>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/user-membership.png" alt="user membership" />
                                        </div>
                                        <div className="right">
                                            <p className="title">User Membership</p>
                                            <p className="small-text">Normal</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-section">
                                            <img src="./img/icons/delete-account.png" alt="delete account" />
                                        </div>
                                        <div className="right">
                                            <p className="title">Delete Your Account</p>
                                            <Link to="/" className="small-text">Delete</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-section">
                                    <div className="main-content">
                                        <div className="header">
                                            <img src="./img/icons/award.png" alt="award" />
                                            <p>Your Last Award</p>
                                        </div>
                                        <div className="apollo-container">
                                            <img src="./img/general/APOLLO.png" alt="apllo" />
                                        </div>
                                        <div className="footer">
                                            <p>Chariot of Apollo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="record-section">
                                <div className="left-section">
                                    <div className="top-section">
                                        <button 
                                            className={`${recordsOpen ? "outline-none-btn active-btn": "outline-none-btn"}`}
                                            onClick={() => this.changeTabs("recordsOpen")}
                                        >records</button>
                                        <button 
                                            className={`${awardsOpen ? "outline-none-btn active-btn": "outline-none-btn"}`}
                                            onClick={() => this.changeTabs("awardsOpen")}
                                        >awards</button>
                                        <button 
                                            className={`${ranksOpen ? "outline-none-btn active-btn": "outline-none-btn"}`}
                                            onClick={() => this.changeTabs("ranksOpen")}
                                        >ranks</button>
                                    </div>
                                    <div className="bottom-section">
                                        {recordsOpen && 
                                        <>
                                            <div className="header">
                                                <p className="title">
                                                    highest Number of message
                                                </p>
                                                <div className="this-day-select" ref={node => { this.node = node; }}>
                                                    <div
                                                        className="tag"
                                                        onClick={() => this.selectClick()}
                                                    >
                                                        This day
                                                    </div>

                                                    {this.state.selectDropDownOpen &&
                                                        <div className="items">
                                                            <div className="item">Moday</div>
                                                            <div className="item">Tuesday</div>
                                                            <div className="item">Wednesday</div>
                                                            <div className="item">Thursday</div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="table-scroll-container">
                                                <table className="language-rank-table">
                                                    <thead>
                                                        <tr>
                                                            <th>rank</th>
                                                            <th>date</th>
                                                            <th>league</th>
                                                            <th>no. of message</th>
                                                            <th>history</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/mentor.png" alt="mentor" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>English</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>
                                                        <tr className="empty-tr">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/scholar.png" alt="scholar" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>Hindi</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>
                                                        <tr className="empty-tr">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/scholar.png" alt="scholar" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>Bangali</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>                                   
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="header">
                                                <p className="title">
                                                    Higest Number of Credit Points
                                                </p>
                                            </div>
                                            <div className="table-scroll-container">
                                                <table className="language-rank-table">
                                                    <thead>
                                                        <tr>
                                                            <th>rank</th>
                                                            <th>date</th>
                                                            <th>league</th>
                                                            <th>no. of message</th>
                                                            <th>history</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/mentor.png" alt="mentor" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>English</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>
                                                        <tr className="empty-tr">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/scholar.png" alt="scholar" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>Hindi</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>
                                                        <tr className="empty-tr">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr className="contained-tr">
                                                            <td>
                                                                <img src="./img/general/scholar.png" alt="scholar" />
                                                            </td>
                                                            <td>Thu, 26 Oct</td>
                                                            <td>Bangali</td>
                                                            <td>200</td>
                                                            <td><Link to="/">View</Link></td>
                                                        </tr>                                   
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>}
                                        
                                        {awardsOpen && 
                                        <div className="award-items">
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                            <AwardCard />
                                        </div>
                                        }

                                        {ranksOpen && 
                                        <div>
                                            <RankTable />
                                        </div>
                                        }
                                    </div>
                                </div>

                                <div className="right-section">
                                    <div className="section-container">
                                        <RightCard />
                                        <RightCard />
                                        <RightCard />
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
