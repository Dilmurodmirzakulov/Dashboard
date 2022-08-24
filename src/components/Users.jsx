import React from 'react'
import '../style/user.css'
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import AddMember from './AddMember';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const Users = (props) => {
    const [itemId, setItemId] = React.useState()
    const [userName, setUserName] = React.useState()
    function removeHide() {
        document.getElementById('add-member-container').classList.remove('hide')
        document.querySelector('.add-member-container').classList.remove('hide')
        setItemId(props.id)
        setUserName(props.userName)
    }
    function removeHideDelete() {
        setItemId(props.id)
        setUserName(props.userName)
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this user?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
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
            <div>
                <div className='user-row user-row-2'>
                    <div className='image-column user-image-dashboard'>
                        <img src={props.image} className='user-image' alt='user' />
                    </div>
                    <div className='name-column'>{props.userName}</div>
                    <div className='number-column'>{props.number}</div>
                    <div className='email-column'>{props.email}</div>
                    <div className='status-column' ><div className={`${props.userStatus === true ? 'active-stat' : 'inactive-stat'} `}>{props.userStatus === false ? 'Inactive' : 'Active'}</div></div>
                    <div className='time-column'>{props.operation}</div>
                    <div className='icons-column'>
                        <div className='icons-container'>
                            <BiPencil className='icon-edit' onClick={() => removeHide()} />
                            <MdDeleteOutline className='icon-edit' onClick={() => removeHideDelete()} />
                        </div>
                    </div>
                </div>
                <AddMember getId={itemId} name={userName} phone={props.number} email={props.email} status={props.userStatus} />
            </div>
        </>
    )
}

export default Users