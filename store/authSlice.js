import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import STATUSES from '../src/globals/status/statuses'
import { useNavigate } from 'react-router-dom'
import API from '../src/http'
import { useSelector } from 'react-redux'
import { TailSpin } from 'react-loader-spinner'


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null,
        //username:null,email:null,password:null
        token : null, 
        status : null
    },
   reducers : {
    setStatus(state,action){
        state.status = action.payload
    },
    setUser(state,action){
        state.user = action.payload
    },
    setToken(state,action){
        state.token = action.payload
    }
   } 
    
})

export const {setStatus,setUser,setToken} = authSlice.actions 
export default authSlice.reducer


//creating Thunks for async function calls like hitting api, io request, db query etc
//async function thunk always take (dispatch) as an arguement which is a function used to invoke the thunk...

export function register(data){
    
    return async function registerThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        
        try {
            const response =  await API.post("register",data)
            if(response.status === 201){
             dispatch(setUser(data))
          
             dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


export function login(data){
    return async function loginThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))

     try {
        const response =  await axios.post('https://react30.onrender.com/api/user/login',data)
        if(response.status === 200 && response.data.token){

            localStorage.setItem('userid', response.data.data[0]._id);
            localStorage.setItem('token',response.data.token) // setting token for individual
            dispatch(setToken(response.data.token))
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}
