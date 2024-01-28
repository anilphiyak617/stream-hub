import { SignIn } from '@clerk/nextjs'
import React from 'react'

interface loginPropsTypes {

}

function LoginPage({ }: loginPropsTypes) {
    return (
        <div className='w-full h-screen bg-gray-500 flex items-center justify-center'>
            <SignIn />
        </div>
    )
}

export default LoginPage