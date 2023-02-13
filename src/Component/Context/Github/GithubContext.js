import { createContext } from "react";
//import { useState } from "react";
import { useReducer } from "react";

import githubReducer from "./githubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children})=>{
    
/*    
    const [users, setusers] = useState('');
    const [loading, setloading] = useState(true);
*/  
    
    const initialState = {
        users:[],
        loading:false,
    }

    const [state , dispatch]=useReducer(githubReducer , initialState)
    
    const setloadingTrue = ()=> dispatch({type:'SET_LOADING_true'})
    
 /*   
    const fetchUser = async ()=> {
        setloading()
        const response = await fetch (`${GITHUB_URL}/users`,{
            headers:{
                Athorization : `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        /*
        setusers(data)
        setloading(false)
        
       dispatch({
        type:'GET_USERS',
        payload:data,
       })

    }*/

    const clearUsers =()=>{
        dispatch({
            type:'CLEAR_USERS'
        })
    }


    const searchUser = async (text)=> {
        setloadingTrue()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch (`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization : `token ${GITHUB_TOKEN}`,
            }
        })
        const {items} = await response.json()
        
       dispatch({
        type:'GET_USERS',
        payload:items,
       })

    }
    

    return(
        <GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            searchUser,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext