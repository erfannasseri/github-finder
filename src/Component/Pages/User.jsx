import React from 'react'
import { useContext , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../Context/Github/GithubContext'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import {FaCodepen,FaStore,FaUserFriends,FaUser, FaUsers, FaCode} from 'react-icons/fa'
import RepoList from '../Repos/RepoList'
import { getUser , getRepos  } from '../Context/Github/GithubAction'

function User() {
    
    const {user,loading,repos,dispatch} = useContext(GithubContext)
    const params = useParams()
   
    useEffect(()=>{
        
        dispatch({type:'SET_LOADING'})
        const getUserData = async ()=>{
            
            const userData = await getUser(params.login)
            dispatch({type:'GET_USER',payload:userData})

            const userRepoData = await getRepos(params.login)
            dispatch({type:'GET_REPOS',payload:userRepoData})
        }
        getUserData()
    },[])

    const {
        name,
        type,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        twitter_username,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = user; 

    if (loading) return <Spinner />;

  return ( <>
        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <Link to='/' className='btn btn-secondary '>
                    Back To search
                </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom-card-image mb-6 md:mb-0">
                    <div className="rounded-lg shadow-xl card image-full">
                        <figure>
                           <img src={avatar_url} alt="Avatar" /> 
                        </figure>
                        <div className='card-body justify-end self-end'>
                            <h2 className="card-title mb-0">
                                {name}
                            </h2>
                            <p>
                                {login}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-3xl card-title">
                        {name}
                        <div className="ml-2 mr-1 badge badge-success">
                            {type}
                        </div>
                        {hireable && (
                            <div className="mx-1 badge badge-info">
                                Hireable
                            </div>
                        )}
                    </h1>
                    <p> {bio} </p>
                    <div className='mt-4 card-actions'>
                            <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>
                                Visit GitHub Profile
                            </a>
                    </div>
                <div className="w-full rounded-lg mt-5 shadow-md bg-base-100 stats">
                    {location && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Location
                            </div>
                            <div className="text-lg stat-value">
                                {location}
                            </div>
                        </div>
                    )}


                    {twitter_username && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Twitter
                            </div>
                            <div className="text-lg stat-value">
                                <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' >{twitter_username}</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full rounded-lg mt-5 shadow-md bg-base-100 stats">
                    {blog && (
                            <div className="stat">
                                <div className="stat-title text-md">
                                    Website
                                </div>
                                <div className="text-lg stat-value">
                                    <a href={`https://${blog}`} target='_blank' rel='noreferrer' >{blog}</a>
                                </div>
                            </div>
                        )}
                </div>

                </div>
            </div>
                <div className="fw-full rounded-lg mt-5 shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {followers}
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {following}
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCode className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Public Repos
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_repos}
                        </div>
                    </div>
   
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_gists}
                        </div>
                    </div>
                </div>
                    <RepoList repos={repos}/>
        </div>
  </>
  )
}

export default User