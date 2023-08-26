import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next';
import './i18n';
const Create = () => {
    const [name,setName]=useState("")
    const [email,SetEmail]=useState("")
    const navigate=useNavigate();
    
    const dispatch=useDispatch();
    const allUsers = useSelector((state)=>state.users)

    const handleSubmit = (event) =>{
        event.preventDefault();
         dispatch(addUser({id:allUsers[allUsers.length-1].id +1,name:name,email:email}))
         navigate("/")
    }
  return (
    <div>
<div className='container'>
    <h4><Trans i18nKey="description.intcrthed">Create-Here</Trans></h4>
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor='name' ><Trans i18nKey="description.intname">Name</Trans> </label>
    <input type="text"  onChange={e =>setName(e.target.value)}/>
    
  </div>
  <div class="mb-3">
      <label htmlFor='email'><Trans i18nKey="description.intemail">Email</Trans> </label>
      <input type="email"  onChange={e =>SetEmail(e.target.value)}/>
    </div>
    <button type="submit" class="btn btn-primary"><Trans i18nKey="description.intsubmit">Submit</Trans></button>
  </form>
  
  </div>
    </div>
  )
}



export default Create;