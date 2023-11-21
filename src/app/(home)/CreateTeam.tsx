"use client"

import Modal from "@/components/Modal";
import PrivateRoutes from "@/utils/PrivateRoutes";
import { useState } from "react";

const CreateTeam = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex justify-between my-20">
                <div>
                    <h2 className="text-4xl font-bold">Team Creation management system</h2>
                    <h4 className="text-2xl font-bold text-slate-400 my-2">Existing Team</h4>
                </div>
                <div>
                    <button className="outline-btn" onClick={openModal} >+ Create a Team</button>
                </div>
            </div>
            <div>
                {isOpen && <PrivateRoutes><Modal closeModal={closeModal}></Modal></PrivateRoutes>};
            </div>
        </>
    );
};

export default CreateTeam;