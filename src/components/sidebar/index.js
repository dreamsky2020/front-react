import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {TweenMax} from 'gsap'
import './index.scss'

class SidebarMenu extends React.Component {

    constructor(props){

        super(props);

        this.state = {
        }

        this.closeMobileMenu = this.closeMobileMenu.bind(this);
    }

    componentDidMount() {
        var header = document.getElementById("navBar");
            var btns = header.getElementsByClassName("nav-item");
            for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            });
        }

        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    closeMobileMenu() {
        let sideBar = document.getElementById("sidebar-menu");
        TweenMax.to(sideBar, .5, {css: {marginLeft: '-200px'}})
        TweenMax.to(sideBar, .5, {css: {visibility: 'hidden'}})

    }

    handleResize = () => {
        if(window.innerWidth > 768) {
            document.getElementById("sidebar-menu").style.visibility = "visible";
            document.getElementById("sidebar-menu").style.marginLeft = "0px";
        }

        else {
            document.getElementById("sidebar-menu").style.visibility = "hidden";
            document.getElementById("sidebar-menu").style.marginLeft = "-200px";
        }
    } 
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }


    render() {

        return (
            <div id="sidebar-menu">
                <div className="logo-section">
                    <Link to="/" className="logo">
                        <img src="./img/general/fortuna_final_logo.png" alt="logo" />
                    </Link>             

                </div>
                <div className="mobile-menu-close">
                    <button onClick={() => this.closeMobileMenu()}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="navbar-container" id="navBar">
                    <ul>
                        <li>
                            <Link to="/" className="nav-item active">
                                <img src="./img/icons/main.svg" alt="main" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/learning-process" className="nav-item">
                                <img src="./img/icons/bar-chart.svg" alt="bar chart" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/main-records" className="nav-item">
                                <img src="./img/icons/Trophy.svg" alt="tyophy" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/main-awards" className="nav-item">
                                <img src="./img/icons/bar-clock.svg" alt="bar clock" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="nav-item">
                                <img src="./img/icons/user.svg" alt="user profile" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/main-rank" className="nav-item">
                                <img src="./img/icons/league.svg" alt="league" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="nav-item">
                                <img src="./img/icons/settings.svg" alt="setting" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                <img src="./img/icons/logout.svg" alt="logout" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}



export default withRouter(SidebarMenu);