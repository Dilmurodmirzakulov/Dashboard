import React from 'react'
import '../style/navFilter.css'
import '../style/addmember.css'
import AddMember from './AddMember';

const NavFilter = ({ adminf, member, setSearchTerm, setSearchEmail, setSearchNumber, setSelectStatus }) => {

    function memberClick() {
        member()
        document.getElementById('admin').classList.remove('active-filter')
        document.getElementById('member').classList.add('active-filter')
    }
    function adminClick() {
        adminf()
        document.getElementById('member').classList.remove('active-filter')
        document.getElementById('admin').classList.add('active-filter')
    }

    function bothClick() {
        if (document.getElementById('member').classList.contains('active-filter')) member()
        if (document.getElementById('admin').classList.contains('active-filter')) adminf()
    }



    function removeHide(){
        document.getElementById('add-member-container').classList.remove('hide')
        document.querySelector('.add-member-container').classList.remove('hide')
    }

    function addHide() {
        document.getElementById('add-member-container').classList.add('hide')
        document.querySelector('.add-member-container').classList.add('hide')
    }


    function clicked() {
        document.getElementById('add-member-container').classList.add('hide')
        document.querySelector('.add-member-container').classList.add('hide')
    }
    return (
        <>
            <div>
                <div className='up-filter'>
                    <div className='member-admin'>
                        <div onClick={() => memberClick()} id='member'>Members</div>
                        <div onClick={() => adminClick()} id='admin'>Admins</div>
                    </div>
                    <div>
                        <button className='add-member' onClick={removeHide} id='add-member'>Add member</button>
                    </div>
                </div>
                <div className='down-filter'>
                    <input className='filter-items' type='text' onChange={(event) => setSearchTerm(event.target.value)} placeholder='Name' />
                    <input className='filter-items' type='email' onChange={(event) => setSearchEmail(event.target.value)} placeholder='Email' />
                    <input className='filter-items' type='phone' onChange={(event) => setSearchNumber(event.target.value)} placeholder='Phone' />
                    <div className='status-container'>
                        <select className='filter-items select-status' defaultValue='' id='status-select' onChange={(event) => setSelectStatus(event.target.value)}>
                            <option value=''>Select status</option>
                            <option value='false'>Inactive</option>
                            <option value='true'>Active</option>
                        </select>
                    </div>
                    <button type='submit' className='filter-search' onClick={() => bothClick()}>Search</button>
                </div>
            </div>
            <AddMember
                clicked = {clicked}
                addHide = {addHide}
            />
        </>
    )
}

export default NavFilter