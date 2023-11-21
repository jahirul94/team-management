"use client"
import { useState } from "react"
import DashboardModal from "./DashboardModal";
import { User } from "./page";

const DashboardHeader = ({ users }: { users: Array<User> }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-between py-10">
            <div>
                <p className="text-3xl font-extrabold my-4">Team Name</p>
                <div className="flex space-x-2 my-4">
                    <span className="muted-btn">Active Members</span>
                    <button className="muted-btn">Pending</button>
                </div>
            </div>
            <div className="flex space-x-2 my-4">
                <button className="submit-btn">Assign a group</button>
                <button className="submit-btn font-semibold" onClick={openModal}>Add Members</button>
            </div>
            {isOpen && <DashboardModal users={users} closeModal={closeModal}></DashboardModal>}
        </div>
    );
};

export default DashboardHeader;