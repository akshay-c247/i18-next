import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { deleteuser } from './UserReducer';
import { Trans, useTranslation } from 'react-i18next';
import './i18n';


const Home = () => {
    const allUsers = useSelector((state)=>state.users)
    const [language,setLanguage]=useState('en');

    const {i18n} = useTranslation();
    const dispatch=useDispatch();
    const handleDelete =(id) =>{
        dispatch(deleteuser({id:id}))}
   
      const onChangeHnd =(e)=>{
        e.preventDefault();
        setLanguage(e.target.value)
       

      }
    
     useEffect(()=>{
        i18n.changeLanguage(language);
          console.log(language,'ll')
      },[language, i18n]);
          
  return (
    <div>
      
        <div className='creat'>
            <Link to="/create" className='btn btn-success my-3'>
              <Trans i18nKey="description.create">Create Users </Trans>+</Link>
        </div>
        <div className='dropdown'>
       <select onChange={onChangeHnd}>
        <option value="en" >English</option>
        <option value="hin">Hindi</option>
        <option value="icelandic">icelandic</option>
       </select>
        </div>
<div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
         {allUsers.map((user,index)=> 
         (

            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'> <Trans i18nKey="description.editbtn">Edit</Trans></Link >
                    <button onClick={() => handleDelete(user.id)} 
                    className='btn btn-sm btn-danger ms-2'><Trans i18nKey="description.dltbtn">Delete</Trans></button>
                </td>
            </tr>
         ))}
  </tbody>
</table>
</div>
</div>
  )
}

export default Home;