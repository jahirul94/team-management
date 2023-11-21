"use client"

import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";

const RegisterPage = () => {
    const { createUser }: any = useContext(AuthContext)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const email: string = e.target.email.value;
        const password: string = e.target.password.value;
        createUser(email, password)
            .then((data: object) => {
                if (data) {
                    axios.post("https://little-programmers-frontend-api.vercel.app/api/v1/user/register", { email, password })
                        .then(data => { })
                }

            })
            .catch((error: any) => console.log(error.message))
    }
    return (
        <div className="mx-auto px-24 py-10 md:mt-52">

            <p className="text-2xl font-semibold text-center my-4">Please Sign up an <span className="font-bold text-2xl">Account</span></p>

            <div className="w-[500px] mx-auto">

                <form onSubmit={handleSubmit} >
                    <input className="input-field" name="email" type="email" placeholder="email address" /><br />

                    <input className="input-field" name="password" type="password" placeholder="password" /> <br />

                    <p className="text-center my-2 text-lg"></p>

                    <input className="submit-btn" type="submit" value="Continue" />

                    <h4 className="text-center my-2 text-lg">Already have an account ? <Link href={"/login"} className="text-blue-500 underline underline-offset-4"> Login</Link></h4>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;