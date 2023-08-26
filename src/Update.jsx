import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';
import { Trans, useTranslation } from 'react-i18next';
import './i18n';

const Update = () => {
    const {id} = useParams();
    
    const allUsers = useSelector((state)=>state.users)
    const existingUser = allUsers.find((f) => f.id === Number(id))
    
     const {name,email}=existingUser;
    const [uname,setName]=useState(name)
    const [uemail,SetEmail]=useState(email)
    const dispatch=useDispatch();
     const navigate=useNavigate();
    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateUser({
                id:id,
                name:uname,
                email:uemail

        }));
        navigate("/")
    }
  return (
    <div>
        <div className='container'>
    <h4><Trans i18nKey="description.inedit">Edit-Here</Trans></h4>
<form onSubmit={handleUpdate} >
  <div class="mb-3">
    <label htmlFor='name' ><Trans i18nKey="description.intname">Name</Trans>  </label>
    <input type="text" value={uname} onChange={e => setName(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor='email'><Trans i18nKey="description.intemail">Email</Trans> </label>
    <input type="email" value={uemail}  onChange={e => SetEmail(e.target.value)}/>
  </div>
  <button type="info" class="btn btn-primary"><Trans i18nKey="description.intupdate">Update</Trans></button>
</form>
</div>
    </div>
  )
}

export default Update