import React, { useContext } from 'react'
import { useState } from 'react'
import GithubContext from '../Context/Github/GithubContext';


function UserSearch() {
    
    const {users , searchUser , clearUsers} = useContext(GithubContext);
    const [Text, setText] = useState('');
    const changeHandler = (e)=>{setText(e.target.value)}
    const submitHandler = (e)=>{
        e.preventDefault()

        if (Text === '') {  
            alert('Please enter something')
        }else {
            searchUser(Text)
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 
    md:grid-cols-2 mb-8 gap-8'>
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
                <button onClick={clearUsers} className="btn btn-ghost btn-lg">
                    Clear
                </button>
            </div>
        )}
    </div>
  )
}

export default UserSearch