"use client"
import { useState } from "react"
import DashboardModal from "./DashboardModal";
import { Team, User } from "./[id]/page";


const DashboardHeader = ({ users, team }: { users: Array<User>, team: Team }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between py-4 md:py-6 lg:py-10">
            <div>
                <p className="text-xl md:text-2xl lg:text-3xl font-extrabold my-4">Team Name</p>
                <div className="flex flex-col md:flex-row md:space-x-2 my-4">
                    <button className="muted-btn">Active Members</button><br />
                    <button className="muted-btn">Pending</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 my-4">
                <button className="submit-btn text-center">Assign a group</button>
                <button className="submit-btn text-center" onClick={openModal}>Add Members</button>
            </div>
            {isOpen && <DashboardModal team={team} users={users} closeModal={closeModal}></DashboardModal>}
        </div>
    );
};

export default DashboardHeader;