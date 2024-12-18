import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";


interface SignInProps {
    auth: 'signin' | 'signup',
    setAuth: (value: 'signin' | 'signup') => void
}

export default function SignUp({ auth, setAuth }: SignInProps) {
    return (
        <div className="mt-20 border p-4 rounded-md w-96">
            <div className="flex flex-col gap-8">
                <p className="text-xl font-semibold text-slate-700">Sign up to start group conversation</p>
                <form className="space-y-3">
                    <Input placeholder="name" className="h-12" />
                    <Input placeholder="email" className="h-12" />
                    <Input placeholder="password" className="h-12" />
                    <p className="text-sm text-slate-600">already have an account? <span className="text-blue-700 cursor-pointer hover:underline transition-all" onClick={() => setAuth('signin')}>signin</span></p>
                    <div>
                        <Button type="submit" variant={"outline"} >Signup</Button>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <Button type="button" variant={'outline'} size={"lg"}><FcGoogle /></Button>
                        <Button type="button" variant={'outline'} size={"lg"}><SiGithub /></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

