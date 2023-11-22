import Image from "next/image";
import image1 from "../../../public/WhatsApp Image 2023-11-20 at 19.32.19_e0993e85.jpg"
import image2 from "../../../public/WhatsApp Image 2023-11-20 at 19.42.32_d7abdc10.jpg"
import image3 from "../../../public/WhatsApp Image 2023-11-20 at 19.42.51_1bcecff3.jpg"


const ViewTeam = () => {
    return (
        <div className="md:border border-indigo-400 bg-[#F4F1F2] p-10 rounded-lg my-10">
            <div className="pb-4">
                <p className="text-center font-bold text-xl md:text-2xl lg:text-3xl text-slate-500">Welcome to the team!</p>
                <p className="text-center font-semibold text-base md:text-xl text-slate-500">there are some things for you to get started</p>
            </div>
            <div className="my-8 flex flex-col md:flex-row md:justify-around md:items-center md:space-x-4">
                <div className="dashboardCard">
                    <Image src={image1} width={200} height={200} alt="Picture" className="w-full mx-auto"></Image>
                    <button className="outline-btn my-2">add more people</button>
                </div>
                <div className="dashboardCard">
                    <Image src={image2} width={200} height={200} alt="Picture" className="w-full mx-auto"></Image>
                    <button className="outline-btn my-2"> Create more channels</button>
                </div>
                <div className="dashboardCard">
                    <Image src={image3} width={200} height={200} alt="Picture" className="w-full mx-auto"></Image>
                    <button className="outline-btn my-2">Open the FAQ</button>
                </div>
            </div>
        </div>
    );
};

export default ViewTeam;