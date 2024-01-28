import { SignUp } from '@clerk/nextjs'
import React from 'react'

interface signUpPagePropsTypes {

}

function SignUpPage({ params }: {
    params: {
        "sign-up": []
    }
}) {

    console.log("PARAMS: ", params['sign-up'])

    return (
        <div className='w-full h-full bg-gray-400 flex items-center justify-center'> <SignUp /> </div>
    )
}

export default SignUpPage