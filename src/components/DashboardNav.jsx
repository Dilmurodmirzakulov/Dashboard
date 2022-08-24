import React from 'react'
import '../style/dashboardNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom'


const DashboardNav = ({change, unDo}) => {
    // const listItems = document.querySelectorAll('.list-item')
    // listItems.forEach(item => {
    //     item.addEventListener('click', ()=>{
    //         listItems.forEach(i => i.classList.remove('active-dashboard'))
    //         item.classList.add('active-dashboard')
    //     })
    // })
    function profileClick(){
        change()
        document.getElementById('user').classList.remove('active-dashboard')
        document.getElementById('profile').classList.add('active-dashboard')
    }
    function UserClick(){
        unDo()
        document.getElementById('profile').classList.remove('active-dashboard')
        document.getElementById('user').classList.add('active-dashboard')
    }

    const navigate = useNavigate()

    function logOut() {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this user?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => navigate('/')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
        
    }

    return (
        <>
            <div className='dashboard-nav-container'>
                <ul className='dashboard-nav'>
                    <li className='list-item' id='profile' onClick={profileClick}>
                        <FontAwesomeIcon className='profile-icon' icon={faUser} /> &nbsp;Profile
                    </li>
                    <Link style={{textDecoration: 'none'}} to='/dashboard'>
                        <li className='list-item active-dashboard' id='user' onClick={UserClick}>
                            <FontAwesomeIcon className='profile-icon middle' icon={faUsers} />Users
                        </li>
                    </Link>
                        <li className='list-item' onClick = {logOut}>
                            <FontAwesomeIcon className='profile-icon' icon={faRightFromBracket} />&nbsp;Logout
                        </li>
                </ul>
            </div>
        </>
    )
}

export default DashboardNav