import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './index.scss'

export class index extends Component {
    render() {
        return (
            <div id="award-card">
                <div className="header-section">
                    <div className="img-section" style={{background: `url(./img/general/APOLLO-rect.png)`}} />
                    <div className="description">
                        <div className="header">
                            <p className="title">Chariot of Apollo</p>
                            <div className="score">
                                <span>3</span>
                                <img src="./img/icons/award.png" alt="level" />
                            </div>
                        </div>
                        <p className="info">
                            Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), 
                            it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. 
                            You have seen Italian organ-boys holding a dancing-ape by a long cord.Being the savage's bowsman, 
                            that is, the person who pulled the bow-oar in his boat (the second one from forward), 
                            it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. 
                            You have seen Italian organ-boys holding a dancing-ape by a long cord…Learn more
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="right-section">
                        <div className="circle"></div>
                        <p>20 Apr 2020</p>
                        <div className="bar"></div>
                        <p>1st place</p>
                        <div className="bar"></div>
                        <p>Nuwa tournament</p>
                        <div className="bar"></div>
                        <Link to="/">See all awards</Link> 
                    </div>
                    <button>
                        <img src="./img/icons/share.png" alt="share"/>
                        <span>Share</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter( index )
