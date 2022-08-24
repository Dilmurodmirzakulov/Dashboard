import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from './ToggleSwitch';
import DragDrop from './DragDrop';
import { useForm } from "react-hook-form";



const AddMember = ({ clicked, addHide }) => {    
    const { register, handleSubmit, formState: { errors } } = useForm()
        const onSubmit = data => console.log(data);


    return (
        <div>
            <div className="add-member-wrapper hide" id='add-member-container' onClick={clicked}>
            </div>
            <form id='form' className='add-member-container hide' onSubmit={handleSubmit(onSubmit)}>
                <div className='add-member-header'>
                    <div>Add member</div>
                    <FontAwesomeIcon icon={faXmark} className='exit-btn' onClick={addHide} />
                </div>
                <label htmlFor='username'>Name</label><br />
                <input type="text" id='username' {...register("username")} />
                <label htmlFor='mobile'>Phone</label><br />
                <input type="tel" id='mobile' {...register("mobile", { required : true, maxLength: 15 })}/>
                <label htmlFor='email'>Email</label><br />
                <input type="email" id='email' {...register("email")}/>
                <p className='stat-label'>Status</p><br />
                <ToggleSwitch />
                <p className='stat-label'>Photo</p><br />
                <DragDrop />
                {errors.mobile?.type === "required" && "Mobile Number is required"}
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                <div className='form-btns'>
                    <button type="submit" >Save</button>
                    <button type="reset" onClick={addHide} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddMember