import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserSliceView() {

    let user=useSelector(state=>state.user);
    let dispatch=useDispatch();


    console.log(user);

    useEffect(()=>
    {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        {user.loading && <h1>Loading.......</h1>}
        {user.error &&  <h1>{user.error}</h1>}

        {user.users.map((u)=>
        {
            return <li key={u.id}>{u.name}</li>
        })}
    </div>
  )
}

export default UserSliceView