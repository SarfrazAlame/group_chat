'use client'


import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useAuthActions } from "@convex-dev/auth/react";


interface SignInProps {
    auth: 'signin' | 'signup',
    setAuth: (value: 'signin' | 'signup') => void
}

export default function SignIn({ auth, setAuth }: SignInProps) {
    const { signIn } = useAuthActions()
    return (
        <div className="mt-20 border p-4 rounded-md  w-96">
            <div className="flex flex-col gap-8">
                <p className="text-xl font-semibold text-slate-700"> Sign in to Continue Group Chat</p>
                <form className="space-y-3" onSubmit={(event) => {
                    event.preventDefault()
                    const formData = new FormData(event.currentTarget)
                    void signIn('password', formData)
                }}>
                    <Input placeholder="email" className="h-12" />
                    <Input placeholder="password" className="h-12" />
                    <p className="text-sm text-slate-600">don't have an account? <span className="text-blue-700 cursor-pointer hover:underline transition-all" onClick={() => setAuth('signup')}>signup</span></p>
                    <div>
                        <Button type="submit" variant={"outline"} >Signin</Button>
                    </div>
                    <div className="flex justify-evenly">
                        <Button type="button" variant={'outline'} size={"lg"}><FcGoogle className="size-8" /></Button>
                        <Button type="button" variant={'outline'} size={"lg"}><SiGithub className="size-8" /></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

