

interface SignInProps {
    auth: 'signin' | 'signup',
    setAuth: (value: 'signin' | 'signup') => void
}

export default function SignUp({ auth, setAuth }: SignInProps) {
    return (
        <div>
            Signup
        </div>
    )
}

