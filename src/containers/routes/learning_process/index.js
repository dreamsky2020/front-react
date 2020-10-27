import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import './index.scss'

export class index extends Component {
    componentDidMount() {
        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[1].classList.add("active");
    }

    render() {
        return (
            <div id="dashboard-learning-progress">
                <div className="route-wrapper">
                    <SidebarMenu />
                    <div className="main-panel">
                        <Header searchBar={true}/>
                        <div className="content">
                            <p className="page-title">Learning Progress</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(index)
