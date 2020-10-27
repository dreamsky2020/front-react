import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Switch from "react-switch";
import './index.scss'

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked: false,
            desktopSwitch: true,
            tabletSwitch: false,
            mobileSwitch: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    handleResize = () => {
        if(window.innerWidth > 992) {
            this.setState({
                desktopSwitch: true,
                tabletSwitch: false,
                mobileSwitch: false
            });
        }
        else if(window.innerWidth > 575) {
            this.setState({
                desktopSwitch: false,
                tabletSwitch: true,
                mobileSwitch: false
            });
        }

        else {
            this.setState({
                desktopSwitch: false,
                tabletSwitch: false,
                mobileSwitch: true
            });
        }
    }
    
    render() {

        const { desktopSwitch, tabletSwitch, mobileSwitch } = this.state;

        return (
            <div id="dashboard-setting-card">
                <div className="notification">
                    <p className="card-title">
                        {this.props.title}
                    </p>
                    <p className="card-description">
                        once done then it will appear in the saved dashboards page.
                    </p>
                </div>

                {desktopSwitch && 
                    <Switch 
                        className={`${this.state.checked ? "switch switch-active":"switch"}`}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={100}
                        height={40}
                        onColor="#0087CB"
                        offColor="#676363"
                        onHandleColor="#fff"
                        offHandleColor="#c0bfbf"
                        handleDiameter={35}
                        onChange={this.handleChange} 
                        checked={this.state.checked} 
                    />
                }

                {tabletSwitch && 
                    <Switch 
                        className={`${this.state.checked ? "switch switch-active":"switch"}`}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={70}
                        height={30}
                        onColor="#0087CB"
                        offColor="#676363"
                        onHandleColor="#fff"
                        offHandleColor="#c0bfbf"
                        handleDiameter={25}
                        onChange={this.handleChange} 
                        checked={this.state.checked} 
                    />
                }

                {mobileSwitch && 
                    <Switch 
                        className={`${this.state.checked ? "switch switch-active":"switch"}`}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={40}
                        height={20}
                        onColor="#0087CB"
                        offColor="#676363"
                        onHandleColor="#fff"
                        offHandleColor="#c0bfbf"
                        handleDiameter={18}
                        onChange={this.handleChange} 
                        checked={this.state.checked} 
                    />
                }
            </div>
        )
    }
}

export default withRouter(index)
