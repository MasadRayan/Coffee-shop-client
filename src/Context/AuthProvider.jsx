import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../components/Firebase/firebase.init'

const AuthProvider = ({children}) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        createUser
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;