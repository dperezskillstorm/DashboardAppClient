import React, {useReducer, useContext} from "react"
import { 
    CLEAR_ALERT, DISPLAY_ALERT, 

    SETUP_USER_BEGIN, SETUP_USER_SUCCESS,SETUP_USER_ERROR, 
} from "./actions"
import reducer from "./reducer"
import axios from "axios"


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')


const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user:user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || " ",
    jobLocation: userLocation || "",

}

const AppContext = React.createContext()

const addUserToLocalStorage = ({user,token,location}) =>{
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token',token)
    localStorage.setItem('location', location)

}

const removeUserToLocalStorage = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('location')
    localStorage.removeItem('user')

}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer,initialState)

const displayAlert =()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
}

const clearAlert = () => {
    setTimeout(()=>{
        dispatch({type:CLEAR_ALERT})
    }, 3000)
   

}


const setupUser = async ({currentUser, endPoint, alertText}) =>{
    dispatch({type: SETUP_USER_BEGIN})

    try {
        const response = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
        const {user, token, location} = response.data
        dispatch({type:SETUP_USER_SUCCESS, payload:{user,token,location,alertText}})
        addUserToLocalStorage({user,token,location})
    } catch (error) {
        //local staorge later
        dispatch({type:SETUP_USER_ERROR, payload: {msg: error.response.data.msg}})
        
    }
    clearAlert()
}


//LOGIN AND REGISGERED WHERE REFACTORED INTO SETUP USER

// const loginUser = async (currentUser) =>{
//     dispatch({type: LOGIN_USER_BEGIN})

//     try {
//         const response = await axios.post("/api/v1/auth/login", currentUser)
//         const {user, token, location} = response.data
//         dispatch({type:LOGIN_USER_SUCCESS, payload:{user,token,location}})
//         addUserToLocalStorage({user,token,location})
//     } catch (error) {
//         //local staorge later
//         dispatch({type:LOGIN_USER_ERROR, payload: {msg: error.response.data.msg}})
        
//     }
//     clearAlert()
// }


// const registerUser = async (currentUser) =>{
//     //this sets the loading to true, and that will disable submit button
//     dispatch({type: REGISTER_USER_BEGIN})

//     try {
//         const response = await axios.post("/api/v1/auth/register", currentUser)
//         const {user, token, location} = response.data
//         dispatch({type:REGISTER_USER_SUCCESS, payload:{user,token,location}})
//         addUserToLocalStorage({user,token,location})
//     } catch (error) {
//         //local staorge later
//         dispatch({type:REGISTER_USER_ERROR, payload: {msg: error.response.data.msg}})
        
//     }
//     clearAlert()
    
// }

return (
    <AppContext.Provider 
        value={{...state,displayAlert,setupUser}} >
            {children}
        </AppContext.Provider>
)

}



const useAppContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}