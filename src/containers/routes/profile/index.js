import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SidebarMenu from 'components/sidebar'
import Header from 'components/dashboard_header'
import Footer from 'components/dashboard_footer'
import './index.scss'

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: "",
            fileInfo: "",
        }

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    componentDidMount() {

        var menus = document.getElementsByClassName("nav-item");
        for(let i=0; i<menus.length; i++) {
            if(menus[i].classList.contains('active')) {
                menus[i].classList.remove('active');
            }
        }
        menus[4].classList.add("active");


        this.setState({imagePreviewUrl: "./img/users/user-1.png", fileInfo: "pic.png"});
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
            this.setState({
              fileInfo: file.name,
              imagePreviewUrl:  reader.result 
            });
          }
      
          reader.readAsDataURL(file)
    }

    render() {
        const { imagePreviewUrl, fileInfo } = this.state;
        return (
            <div id="dashboard-profile">
                <div className="route-wrapper">

                    <SidebarMenu />

                    <div className="main-panel">
                        <Header searchBar={false}/>
                        <div className="content">
                            <p className="dashboard-header-title">Profile</p>
                            <div className="main-body">
                                <div className="profile-info">
                                    <div className="card-style personal-profile">
                                        <div className="user-main-profile">
                                            <div className="user-photo" style={{background: `url(./img/users/user-1.png)`}}></div>
                                            <p className="user-name">Jhon Doe</p>
                                            <p className="user-email">jhondoe1234@gmail.com</p>
                                        </div>
                                        <div className="bottom">
                                            <div className="item telegram-name">
                                                <div className="rounded-bar" />
                                                <div className="info">
                                                    <p className="title">Telegram Username</p>
                                                    <p className="name">Jhon Doe</p>
                                                </div>
                                            </div>
                                            <div className="item telegram-id">
                                                <div className="rounded-bar" />
                                                <div className="info">
                                                    <p className="title">Telegram ID</p>
                                                    <p className="name">#4665748jh</p>
                                                </div>
                                            </div>
                                            <div className="item city">
                                                <div className="rounded-bar" />
                                                <div className="info">
                                                    <p className="title">City</p>
                                                    <p className="name">Pozo</p>
                                                </div>
                                            </div>
                                            <div className="item country">
                                                <div className="rounded-bar" />
                                                <div className="info">
                                                    <p className="title">Country</p>
                                                    <p className="name">Norway</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-style personal-info">
                                        <p className="card-title">Personal Information</p>
                                        <div className="item">
                                            <img src="./img/icons/calendar.png" alt="calendar" />
                                            <div className="info">
                                                <p className="title">Your e-birthday</p>
                                                <p className="value">20 Auguest 2019</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <img src="./img/icons/wallet.png" alt="calendar" />
                                            <div className="info">
                                                <p className="title">Your wallet</p>
                                                <p className="value">2000 Fortunas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-update">
                                    <div className="card-style update-photo">
                                        <div className="photo-section">
                                            <div className="user-photo" style={{backgroundImage: `url(${imagePreviewUrl})`}} alt="user-photo" />
                                            <div className="item">
                                                <div className="custom-file-upload">
                                                    <div className="title">Upload Photo</div>
                                                    <input className="fileInput" type="file" accept="image/*" onChange={(e)=>this.handleImageChange(e)} />
                                                </div>
                                                <p className="name">{fileInfo}</p>
                                            </div>
                                        </div>
                                        <button>Update</button>
                                    </div>

                                    <p className="sub-title">
                                        Change User Information Here
                                    </p>

                                    <div className="card-style change-info">
                                        <form>
                                            <div className="group-input">
                                                <div className="group">
                                                    <label>Name</label>
                                                    <input type="text" placeholder="Jhon Doe" />
                                                </div>
                                                <div className="group">
                                                    <label>Email</label>
                                                    <input type="text" placeholder="Jhondoe1234@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label>Address</label>
                                                <input type="text" placeholder="Street 4, Pozo, Norway" />
                                            </div>
                                            <div className="group-input">
                                                <div className="group">
                                                    <label>City</label>
                                                    <input type="text" placeholder="Pozo" />
                                                </div>
                                                <div className="group">
                                                    <label>Country</label>
                                                    <input type="text" placeholder="Norway" />
                                                </div>
                                            </div>
                                            <button className="update-btn">Update information</button>
                                        </form>
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
