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
            <div className="flex flex-col md:flex-row justify-between my-6 md:my-10 lg:my-20">
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Team Creation management system</h2>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-400 my-2">Existing Team</h4>
                </div>
                <div>
                    <button className="outline-btn my-4 md:my-0" onClick={openModal} >+ Create a Team</button>
                </div>
            </div>
            <div>
                {isOpen && <PrivateRoutes><Modal closeModal={closeModal}></Modal></PrivateRoutes>};
            </div>
        </>
    );
};

export default CreateTeam;