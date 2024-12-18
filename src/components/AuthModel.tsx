'use client'

import { useState } from "react"
import SignUp from "./SignUp"
import SignIn from "./SignIn"

export default function AuthModel() {
    const [auth, setAuth] = useState<'signin' | 'signup'>('signin')

    return (
        <div className="w-full h-full flex justify-center items-center m">
            {
                auth === 'signin' ? <SignIn auth={auth} setAuth={setAuth} /> : <SignUp auth={auth} setAuth={setAuth} />
            }
        </div>
    )
}
