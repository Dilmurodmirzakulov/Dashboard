import React from 'react'
import '../style/user.css'
const UserNav = () => {
    return (
        <>
            <div className='table-inner'>
                <div className='user-row'>
                    <p className='user-data-header image-column'>Photo</p>
                    <p className='user-data-header name-column'>Member name</p>
                    <p className='user-data-header number-column'>Mobile</p>
                    <p className='user-data-header email-column'>Email</p>
                    <p className='user-data-header status-column'>Status</p>
                    <p className='user-data-header time-column'>Operation</p>
                    <p className='user-data-header icons-column'>Action</p>
                </div>
            </div>
        </>
    )
}

export default UserNav