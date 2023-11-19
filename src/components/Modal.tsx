"use client"
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";

const Modal = ({ closeModal }: any) => {
    const [toggle, setToggle] = useState(false)

    interface TeamDetails {
        name?: string,
        category?: string
    }

    const { teamDetails, setTeamDetails }: any = useContext(AuthContext);


    const handleFormData1 = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const name: string = (e.target as HTMLFormElement).teamName.value;
        const userDetails = { teamName: name }
        setTeamDetails(userDetails)
        setToggle(!toggle)
    }

    const handleFormData2 = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const category: string = (e.target as HTMLFormElement).category.value;
        const newUserDetails: TeamDetails = { ...teamDetails, category }
        setTeamDetails(newUserDetails)
    }

    console.log(teamDetails);
    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-[40%] p-6 rounded shadow-lg">
                    {!toggle && <form onSubmit={handleFormData1}>
                        <div className="mt-4">
                            <h2>Create a new CreateTeam</h2>
                            <p>Team name</p>
                            <input name="teamName" type="text" placeholder="team name" />
                            <div className="flex justify-between">
                                <button onClick={closeModal} className="primary-button">Cancel</button>
                                <button type="submit" className="primary-button">Continue</button>
                            </div>
                        </div>
                    </form>}
                    {toggle && <form onSubmit={handleFormData2}>
                        <div className="mt-4">
                            <h2>Team Category</h2>
                            <p>Team title</p>
                            <input name="category" type="text" placeholder="team title" />
                            <div className="flex justify-between">
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