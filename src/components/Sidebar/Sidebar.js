import React from 'react'
import {Link} from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <i class="fa-solid fa-house-user sidebarIcon"></i>
                        <Link to='/' className="sidebarListItemText">Home</Link>
                    </li>
                    <li className="sidebarListItem">
                    <i class="fa-solid fa-address-book sidebarIcon"></i>
                        <Link to='/contact' className="sidebarListItemText">Contact</Link>
                    </li>
                    <li className="sidebarListItem">
                    <i class="fa-solid fa-circle-info sidebarIcon"></i>
                        <Link to='/information' className="sidebarListItemText">Information</Link>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-circle-question sidebarIcon"></i>
                        <Link to='/guide' className="sidebarListItemText">Guide</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar