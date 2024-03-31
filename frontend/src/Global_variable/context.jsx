import {createContext} from 'react'

export const globalContext = createContext();

export const initialState = {
    userId :  null ,
    user_name : null,
    sellerId : null,
    isSideBarActive: true    
}

export const reducer = (state, action) => {
    switch (action.type) {
        
        case "set_userId": {
            return {
                ...state,
                userId: action.payload
            }
        }

        case "set_name" : {
            return {
                ...state,
                user_name: action.payload
            }
        }

        case "set_sellerId" : {
            return {
                ...state,
                sellerId: action.payload
            }
        }

        case "set_sidebar" : {
            return {
                ...state,
                isSideBarActive: action.payload
            }
        }


        default: {
            return
        }

    }
}