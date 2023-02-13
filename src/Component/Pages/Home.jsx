import React from 'react'
import UserResults from '../Users/UserResults'
import UserSearch from '../Users/UserSearch'

function Home() {
  return (
    <div>
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

export default Home