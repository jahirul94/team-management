"use client"
import Modal from "@/components/Modal";
import { useState } from "react";

const CreateTeam = () => {
    const [isOpen, setIsOpen] = useState(false);
     
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-between my-20">
            <div>
                <h2 className="text-4xl font-bold">Team Creation management system</h2>
                <h4 className="text-2xl font-bold">Existing Team</h4>
            </div>
            <div>
                <button className="bg-white text-indigo-500 border
                  border-indigo-500 py-3 px-6 rounded hover:bg-indigo-500 hover:text-white transition duration-300 text-xl font-bold" onClick={openModal} >+ Create a Team</button>
            </div> 
            {isOpen && <Modal></Modal>}
        </div>
    );
};

export default CreateTeam;