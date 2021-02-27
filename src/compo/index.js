import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavLogo from '../../img/logo.b5cb06e3.svg'
// import Theming from '../Themeing'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiX } from "react-icons/fi";
import {FaSpotify, FaTwitter, FaDiscord, FaYoutube} from 'react-icons/fa';
import styled from 'styled-components'
import './SideNav.css'

const StyledNav = styled.nav`

    .navigation {
        @media (max-width: 768px) {
             border: none;
         }
    }
    .navigation-nav {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 1rem;
        @media (max-width: 1020px) {
             margin-right: 0rem;
         }
        .list {
            @media (max-width: 768px) {
                margin-top: 10rem;
            }            
        }
         
    }

    /* .shown {
        .navigation-nav {
            background: red;
        }
    } */
    img {
         height: 55px;
         width: auto;
         margin: 1rem;
         @media(max-width: 768px) {
             margin-left: 1rem;
         }
         @media(max-width: 665px) {
             margin-left: .5rem;
         }
         @media(max-width: 477px) {
             height: 40px;
         }
     }

    .icon {
        display: flex;
        justify-content: space-evenly;
    }
    .item {
        margin-left: 1rem;
        @media (max-width: 1062px) {
             margin-left: .5rem;
        }
        @media (max-width: 1013px) {
             margin-left: 0rem;
        }
    }
    .NavLink:link,
    .NavLink:visited {
        width: 100%;
        display: inline-block;
        font-size: .95rem;
        font-weight: 500;
        padding: .5rem 1.5rem .5rem 1rem;
        margin-left: 1rem;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.2s;
        @media (max-width: 1252px) {
             font-size: .9rem;
         }
         @media (max-width: 1212px) {
             font-size: .85rem;
         }
         @media (max-width: 1172px) {
             padding: .5rem 1rem;
         }
         @media (max-width: 1164px) {
            padding: .5rem .7rem;
        }
        @media (max-width: 1029px) {
            margin-left: 0;
        }
         @media (max-width: 864px) {
             padding: .5rem;
         }
         @media (max-width: 768px) {
             font-size: 1.1rem;
             margin: -.2rem 0;
         }
    }
    .item {
        margin: .1rem 0;
    }
    .simply {
        width: 100%;
        display: inline-block;
        font-size: .95rem;
        font-weight: 500;
        padding: .5rem 1.5rem .5rem 1rem;
        margin-left: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s;
        @media (max-width: 1252px) {
             font-size: .9rem;
         }
         @media (max-width: 1212px) {
             font-size: .85rem;
         }
         @media (max-width: 1172px) {
             padding: .5rem 1rem;
         }
         @media (max-width: 1164px) {
            padding: .5rem .7rem;
        }
        @media (max-width: 1029px) {
            margin-left: 0;
        }
         @media (max-width: 864px) {
             padding: .5rem;
         }
         @media (max-width: 768px) {
             font-size: 1.1rem;
             margin: -.2rem 0;
         }
    }
    .link-icon {
        text-decoration: none;
        font-size: 1.35rem;
        @media (max-width: 768px) {
            margin: 0 .5rem;
        }
    }
    .menu-nav {
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
`

export class Nav extends Component {
     state = {
         toggle: false
     }

     menuToggle = () => {
         this.setState({toggle: !this.state.toggle})
     }

     render() {
         const {toggle} = this.state;
         return (
             <>
             <StyledNav className="nav" role="navigation">
                 <div className="navigation main-navy">
                 <img src={NavLogo} alt="Nav logo" />
                    <div className={toggle ? `shown` : `hidden`}>
                        <nav className="navigation-nav">
                            <ul className="list">
                               <li className="gcb close" onClick={this.menuToggle}><FiX /></li>
                               <li className="gcb item"><NavLink className="gc NavLink" exact to="/">All Submissions</NavLink></li>
                               <li className="gcb item"><NavLink className="gc NavLink" to="/dashboard">Dashboard</NavLink></li>
                               <li className="gcb gc item simply">Account</li>
                               <li className="gcb gc item simply">Team</li>
                               {/* <Theming /> */}
                               <li className="gcb gc item simply">Logout</li>
                            </ul>
                            <ul className="icon">
                                <li className="icon-item"><Link className="gc link-icon" to="#"><FaSpotify/></Link></li>
                                <li className="icon-item"><Link className="gc link-icon" to="#"><FaTwitter/></Link></li>
                                <li className="icon-item"><Link className="gc link-icon" to="#"><FaDiscord/></Link></li>
                                <li className="icon-item"><Link className="gc link-icon" to="#"><FaYoutube/></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu" onClick={this.menuToggle} style={{display: toggle ? 'none': 'initial'}}><GiHamburgerMenu className="menu-nav" /></div>
                 </div>
             </StyledNav>
             </>
         )
     }
}

export default Nav
 