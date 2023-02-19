import React, { useContext } from 'react'
import { useState } from 'react'
import AlertContext from '../Context/Alert/AlertContext';
import GithubContext from '../Context/Github/GithubContext';
import { searchUser } from '../Context/Github/GithubAction';

function UserSearch() {
    
    const {users ,dispatch} = useContext(GithubContext);
    
    const {setAlert} = useContext(AlertContext);
   
    const [Text, setText] = useState('');

    const changeHandler = (e)=>{setText(e.target.value)}
    
    const submitHandler = async (e)=>{
        e.preventDefault()

        if (Text === '') {  
            setAlert('Please enter something','error')
        }else {
            
            dispatch({type:'SET_LOADING'})
            
            const users = await searchUser(Text)
            dispatch({type:'GET_USERS',payload:users})
            
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 
    md:grid-cols-1 mb-8 gap-8 '>
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        placeholder='Search'
                        value={Text}
                        onChange={changeHandler} />
                        <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>    
                </div>    
            </form>   
        </div>    
        {users.length > 0 && (
            <div>
                <button onClick={()=> dispatch({type:'CLEAR_USERS'})} className="btn btn-ghost btn-lg">
                    Clear
                </button>
            </div>
        )}
    </div>
  )
}

export default UserSearch