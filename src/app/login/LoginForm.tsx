'use client'
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const LoginForm = () => {
    const { signUpUser }: any = useContext(AuthContext)
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const email: string = e.target.email.value;
        const password: string = e.target.password.value;
        signUpUser(email, password)
            .then((data: object) => {
                if (data) {
                    axios.post("https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/user/login", { email, password })
                        .then(data => {
                            if (data) {
                                console.log(data.data);
                                return router.push("/")
                            }
                        })
                }

            })
            .catch((error: any) => console.log(error.message))
    }

    return (
        <div className="w-[500px] mx-auto">

            <form onSubmit={handleSubmit} >
                <input className="input-field" name="email" type="email" placeholder="email address" /><br />

                <input className="input-field" name="password" type="password" placeholder="password" /> <br />

                <p className="text-center my-2 text-lg">Forgot Password ?</p>

                <input className="submit-btn" type="submit" value="Continue" />

                <h4 className="text-center my-2 text-lg">Don{"'"}t have an account? <Link href={"/register"} className="text-blue-500 underline underline-offset-4"> Sign up</Link></h4>
            </form>
        </div>
    );
};

export default LoginForm;