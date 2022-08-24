import React from 'react'
import Navbar from './Navbar'
import DashboardNav from './DashboardNav'
// import NavFilter from './NavFilter'
// import Users from './Users'
import '../style/styles.css'
import '../style/user.css'
// import data from '../data'
// import UserNav from './UserNav'
import User from './User'
import Profile from './Profile'
// import Welcome from './Welcome'


const Dashboard = () => {

    // const arr = data.map((item, i) => <Users key = {i} image={item.image} userName = {item.userName} number = {item.number} email = {item.email} userStatus = {item.userStatus} />)
    const [dashboard, setDashboard] = React.useState(<User  />)
    function changeDashboard() {
        setDashboard(<Profile />)
    }
    function returnUser() {
        setDashboard(<User />)
    }
    
    return (
        <>
            <div className='dashboard-container'>
                <Navbar />
                <div className='dashboard-main-content'>
                    <DashboardNav change = {changeDashboard} unDo = {returnUser} />
                    {dashboard}
                </div>
            </div>
        </>
    )
}

export default Dashboard