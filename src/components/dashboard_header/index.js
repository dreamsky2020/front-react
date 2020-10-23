import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './index.scss'


export class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingItemOpen: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.showMobileMenu = this.showMobileMenu.bind(this);
    }

    handleClick() {
        if (!this.state.settingItemOpen) {
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
            settingItemOpen: !prevState.settingItemOpen,
        }));
      }
      
    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    showMobileMenu() {
        document.getElementById("sidebar-menu").style.display = "flex";
    }

    render() {
        const { settingItemOpen } = this.state;
        return (
            <div id="dashboard-header">
                <div className="search-section">
                    <input type="text" placeholder="once done then it will appear in the saved dashboards page." />
                    <button className="">Announcement</button>
                </div>
                <div className="right-section">
                    
                    <div className="notice">
                        <Link to="/" className="logo">
                            <img src="./img/general/fortuna_final_logo.png" alt="logo" />
                        </Link>
                        <div className="help-info">
                            <button className="icon-btn">
                                <img src="./img/icons/icon.png" alt="icon" />
                            </button>
                            <button className="icon-btn">
                                <img src="./img/icons/Shape.png" alt="icon" />
                                <div className="notification-icon"></div>
                            </button>
                        </div>
                    </div>
                    <div className="user-setting">
                        <button className="mobile-menu-btn" onClick={() => this.showMobileMenu()}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="section-right">
                            <img src="./img/icons/Group.png" alt="icon" />
                            <div className="dropdown" ref={node => { this.node = node; }}>
                                <div 
                                    className="name" 
                                    onClick={() => this.handleClick()}
                                >
                                        Jasica Wingelton
                                </div>

                                {settingItemOpen &&
                                <div className="items">
                                    <div className="item">Edit Profile</div>
                                    <div className="item">Delete Account</div>
                                    <div className="item">Logout</div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter( index )
