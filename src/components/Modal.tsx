"use client"
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const Modal = ({ closeModal }: any) => {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()

    interface TeamDetails {
        name?: string,
        category?: string
    }

    const { teamDetails, setTeamDetails , setNewTeam }: any = useContext(AuthContext);
 
    const handleFormData1 = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const name: string = (e.target as HTMLFormElement).teamName.value;
        if (name?.length > 0) {
            const userDetails = { teamName: name }
            setTeamDetails(userDetails)
            setToggle(!toggle)
        }
    }

    const handleFormData2 = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const category: string = (e.target as HTMLFormElement).category.value;
        const userData: TeamDetails = { ...teamDetails, category }
        setTeamDetails(userData)
        const image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const description = "new team"
        const TeamDetails = { name: teamDetails?.teamName, category , image , description}
        axios.post("https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/team/create", TeamDetails)
            .then(data => {
                setNewTeam(data.data.data)
                return router.push('/dashboard')
            })
    }
 
    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-[30%] p-6 rounded shadow-lg shadow-blue-300 py-10 border-t-2 border-blue-400">
                    {!toggle && <form onSubmit={handleFormData1}>
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold pb-4">Create a new CreateTeam</h2>
                            <p className="text-xl text-slate-400 font-semibold my-4">Team name</p>
                            <input className="modal-input" name="teamName" type="text" placeholder="team name" required />
                            <div className="flex justify-between my-4">
                                <button onClick={closeModal} className="primary-button">Cancel</button>
                                <button type="submit" className="primary-button">Continue</button>
                            </div>
                        </div>
                    </form>}
                    {toggle && <form onSubmit={handleFormData2}>
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold pb-4">Team Category</h2>
                            <p className="text-xl text-slate-400 font-semibold my-4">Team title</p>
                            <input className="modal-input" name="category" type="text" placeholder="team title" required />
                            <div className="flex justify-between my-4">
                                <button onClick={closeModal} className="primary-button">Cancel</button>
                                <button type="submit" className="primary-button">Continue</button>
                            </div>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default Modal;