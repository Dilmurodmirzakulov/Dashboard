import React from 'react'
import NavFilter from './NavFilter'
import UserNav from './UserNav'
import Users from './Users'
import '../style/styles.css'
import '../style/user.css'
import {useEffect, useState} from 'react'
import load from './usersData'
import loadAdmin from './adminData'
import AddMember from './AddMember'

const User = () => {

    const [users, setUsers] = useState([])
    const [admins, setAdmins] = useState([])
    useEffect( () => {
        load().then((data) => setUsers(data))
    },[])

    useEffect( () => {
        loadAdmin().then((data) => setAdmins(data))
    },[])

    const [searchTerm, setSearchTerm] = React.useState('')
    const [searchEmail, setSearchEmail] = React.useState('')
    const [searchNumber, setSearchNumber] = React.useState('')
    const [selectStatus, setSelectStatus] = React.useState('')

    const arr = users.filter(((item) => {
        if (searchTerm === '' && searchEmail === '' && searchNumber === '' && selectStatus === '') {
            return item
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.email.toLowerCase().includes(searchEmail.toLowerCase()) && item.number.toLowerCase().includes(searchNumber.toLowerCase()) && item.userStatus.toString().includes(selectStatus.toLowerCase())) {
            return item
        }
    })).map((item) => <Users users = {item} id = {item.id} key={item.id} image={item.image} userName={item.name} number={item.number} email={item.email} userStatus={item.userStatus}  operation={item.operation}  />)


    const array = admins.filter(((item) => {
        if (searchTerm === '' && searchEmail === '' && searchNumber === '' && selectStatus === '') {
            return item
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.email.toLowerCase().includes(searchEmail.toLowerCase()) && item.number.toLowerCase().includes(searchNumber.toLowerCase()) && item.userStatus.toString().includes(selectStatus.toString().toLowerCase())) {
            return item
        }
    })).map((item) => <Users users = {item} key={item.id} image={item.image} userName={item.name} number={item.number} email={item.email} userStatus={item.userStatus} operation={item.operation} />)


    const [admin, setAdmin] = React.useState(arr)
    function adminf() {
        setAdmin(array)
    }
    function member() {
        setAdmin(arr)
    }



    return (
        <>
            <div className='dashboard-user-info'>
                <NavFilter setSearchTerm={setSearchTerm} setSearchEmail = {setSearchEmail} setSearchNumber = {setSearchNumber} setSelectStatus = {setSelectStatus} adminf={adminf} member={member} />
                <div className='table'>
                    <div className='table-inner-wrapper'>
                        <UserNav />
                        {admin}
                    </div>
                </div>
            </div>
            <AddMember users = {users} />
        </>
    )
}

export default User;