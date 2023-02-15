import React from 'react'
import { Link } from 'react-router-dom'
function UserItem({user: {login, avatar_url}}) {
  return (
    <Link to={`/user/${login}`}>
        <div className='card shadow-md compact side bg-base-100'>
            <div className="felx-row item-center space-x-4 card-body">
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14 mx-5">
                        <img src={avatar_url} alt="Profile" />
                    </div>
                    <h2 className='card-title'>
                        {login}
                    </h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default UserItem