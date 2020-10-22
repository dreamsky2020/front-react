import React from 'react';
import {withRouter, Link} from 'react-router-dom'
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
        window.addEventListener('resize', this.handleResize)
    }

    closeMobileMenu() {
        document.getElementById("sidebar-menu").style.display = "none";
    }

    handleResize = () => {
        if(window.innerWidth > 768) {
            document.getElementById("sidebar-menu").style.display = "flex";
        }

        else {
            document.getElementById("sidebar-menu").style.display = "none";
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
                            <Link to="/" className="nav-item">
                                <img src="./img/icons/bar-chart.svg" alt="bar chart" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                <img src="./img/icons/Trophy.svg" alt="tyophy" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                <img src="./img/icons/bar-clock.svg" alt="bar clock" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
                                <img src="./img/icons/league.svg" alt="league" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">
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