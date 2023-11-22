"use client"
import axios from "axios";
import { useState } from "react"
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { Team, User } from "./[id]/page";


const DashboardModal = ({ closeModal, users, team }: { closeModal: () => void, users: Array<User>, team: Team }) => {
    const [toggle, setToggle] = useState(false)
    const [searchUser, setSearchUser] = useState<User>()

    const sendRequest = (teamId: string): void => {
        console.log(teamId);
        if (searchUser) {
            axios.post(`https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/team/invitation/create/${searchUser?.email}/${teamId}`)
                .then(data => {
                    if (data) {
                        alert(data.data.message)
                        closeModal();
                    }
                })
                .catch(error => console.log(error.message))
        }
    }


    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-11/12 md:w-10/12 lg:w-[30%] p-6 rounded shadow-lg shadow-blue-400">
                    {/* 1st part  */}
                    {!toggle && <div className="mt-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold my-4">Assign a new member</h2>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-slate-500">Group member can</p>
                        <ul className="space-y-1 my-4">
                            <li className="text-base md:text-lg">1. Identify skills needed.</li>
                            <li className="text-base md:text-lg">2. Define clear roles.</li>
                            <li className="text-base md:text-lg">3. Assign A leader.</li>
                            <li className="text-base md:text-lg">4. set clear goals.</li>
                        </ul>
                        <div className="flex justify-between my-4">
                            <button onClick={closeModal} className="primary-button">Cancel</button>
                            <button onClick={() => setToggle(!toggle)} className="primary-button">Continue</button>
                        </div>
                    </div>}
                    {/* 2nd part  */}
                    {toggle && <div className="mt-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold my-6">Who do you want to add new members ?</h2>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-slate-500">Add new members to join group</p>
                        <input onChange={(e) => { setSearchUser(users?.find(user => user?.email?.includes(e.target.value))) }} className="modal-input" name="email" type="text" placeholder="type a email to assign group member" />
                        {searchUser && <div>
                            <div className="flex space-x-3 items-center py-4">
                                {searchUser.photoURL ? <Image width={50} height={50} className="rounded-full"
                                    src={searchUser?.photoURL} alt="user image"></Image> : <FaUserAlt className="text-3xl"></FaUserAlt>}
                                <div>
                                    <h2 className="text-xl font-bold">{searchUser?.displayName ? searchUser.displayName : "No name assign"}</h2>
                                    <h3 className="text-lg font-semibold">{searchUser?.email}</h3>
                                </div>
                            </div>
                        </div>}
                        <div className="flex justify-between my-4">
                            <button onClick={closeModal} className="primary-button">Cancel</button>
                            <button disabled={!searchUser} onClick={() => sendRequest(team?._id)} className={searchUser ? "primary-button" : "disabled-button"}>Add Member</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default DashboardModal;