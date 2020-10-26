import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import SettingCard from 'components/setting_card'
import './index.scss'

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationOpen: true,
        }

        this.closeNotification = this.closeNotification.bind(this);
    }

    closeNotification() {
        this.setState({notificationOpen: false});
    }

    componentDidMount() {
        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[6].classList.add("active");

    }
    render() {
        return (
            <div id="dashboard-settings">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={false}/>
                        <div className="content">

                            {this.state.notificationOpen && 
                                <div className="top-notification">
                                    <div className="note">Follow US For 10 Fortunas Every Subscription.</div>
                                    <div className="feature">
                                        <div className="social-links">
                                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </div>
                                        <button className="close-btn" onClick={() => this.closeNotification()}>
                                            <i className="fa fa-times" />
                                        </button>
                                    </div>
                                </div>
                            }

                            <p className="page-title">
                                Notifications
                            </p>
                            <div className="main-body">
                                <SettingCard 
                                    title="Notify Me About New Tournaments"
                                />
                                <SettingCard 
                                    title="Notify Me On New Trophies"
                                />
                                <SettingCard 
                                    title="Notify Me On New Records"
                                />
                                <SettingCard 
                                    title="Notify Me Via Email Also"
                                />
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
