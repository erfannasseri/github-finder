import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'


function RepoList({repos}) {


return(
    <div>
        <div className='card-body'>
            <h2 className="h2 text-3xl my-4 font-bold"> Latest Repositories</h2>
              {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
        </div>
</div>
  )
}
RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}
export default RepoList
